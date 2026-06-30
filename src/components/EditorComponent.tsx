"use client";

import React, { useEffect, useRef } from "react";
import type EditorJS from "@editorjs/editorjs";
import type { OutputData } from "@editorjs/editorjs";

interface EditorProps {
  data?: OutputData;
  onChange?: (data: OutputData) => void;
  holder: string;
}

export function EditorComponent({ data, onChange, holder }: EditorProps) {
  const ejInstance = useRef<EditorJS | null>(null);

  useEffect(() => {
    let editorInstance: any = null;

    async function initEditor() {
      try {
        const EditorJSClass = (await import("@editorjs/editorjs")).default;
        const Header = (await import("@editorjs/header")).default;
        const List = (await import("@editorjs/list")).default;

        if (!ejInstance.current) {
          const editor = new EditorJSClass({
            holder: holder,
            data: data || { blocks: [] },
            tools: {
              header: {
                class: Header as any,
                inlineToolbar: true,
                config: {
                  placeholder: "Enter a header",
                  levels: [1, 2, 3, 4],
                  defaultLevel: 3,
                },
              },
              list: {
                class: List as any,
                inlineToolbar: true,
              },
            },
            onChange: async () => {
              const content = await editor.save();
              if (onChange) {
                onChange(content);
              }
            },
          });

          ejInstance.current = editor as any;
          editorInstance = editor;
        }
      } catch (err) {
        console.error("Failed to initialize EditorJS:", err);
      }
    }

    initEditor();

    return () => {
      const inst = ejInstance.current || editorInstance;
      if (inst) {
        try {
          inst.destroy();
        } catch (e) {
          // ignore
        }
        ejInstance.current = null;
      }
    };
  }, [holder]);

  return (
    <div className="w-full text-left bg-zinc-50 border border-zinc-200 rounded-2xl p-6 min-h-[300px]">
      <div id={holder} className="prose max-w-none editor-js-container text-zinc-800" />
      <style jsx global>{`
        .editor-js-container .ce-block__content {
          max-width: 100% !important;
        }
        .editor-js-container .ce-toolbar__content {
          max-width: 100% !important;
        }
        .editor-js-container .ce-paragraph {
          color: #3F3F46;
          font-family: "Nimbus Sans", sans-serif;
          font-size: 16px;
          line-height: 26px;
          padding: 0.5rem 0;
        }
        .editor-js-container .ce-header {
          color: #0F172A;
          font-family: "Nimbus Sans", sans-serif;
          font-weight: 700;
          padding: 1rem 0 0.5rem 0;
        }
        .editor-js-container .cdx-list__item {
          color: #3F3F46;
          font-family: "Nimbus Sans", sans-serif;
          font-size: 15px;
          padding: 0.25rem 0;
        }
        .ce-toolbar__plus, .ce-toolbar__settings-btn {
          color: #3F3F46 !important;
          background: #E4E4E7 !important;
        }
      `}</style>
    </div>
  );
}
