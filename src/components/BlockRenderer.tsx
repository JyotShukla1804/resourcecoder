import React from "react";

interface Block {
  type: string;
  data: {
    text?: string;
    level?: number;
    style?: "ordered" | "unordered";
    items?: string[];
  };
}

interface BlockRendererProps {
  data?: {
    blocks?: Block[];
  };
}

export function BlockRenderer({ data }: BlockRendererProps) {
  if (!data || !data.blocks) return null;

  return (
    <div className="space-y-4">
      {data.blocks.map((block, index) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p
                key={index}
                className="text-[#9F9FA9] font-normal"
                style={{
                  fontFamily: '"Nimbus Sans", sans-serif',
                  fontSize: "16px",
                  lineHeight: "26px",
                }}
                dangerouslySetInnerHTML={{ __html: block.data.text || "" }}
              />
            );
          case "header":
            const Level = `h${block.data.level || 3}` as keyof React.JSX.IntrinsicElements;
            return (
              <Level
                key={index}
                className="text-white font-bold"
                style={{
                  fontFamily: '"Nimbus Sans", sans-serif',
                  fontWeight: 700,
                  fontSize:
                    block.data.level === 1
                      ? "32px"
                      : block.data.level === 2
                      ? "28px"
                      : "24px",
                  lineHeight: "36px",
                  marginTop: "1.5rem",
                  marginBottom: "0.5rem",
                }}
                dangerouslySetInnerHTML={{ __html: block.data.text || "" }}
              />
            );
          case "list":
            const ListTag = block.data.style === "ordered" ? "ol" : "ul";
            return (
              <ListTag
                key={index}
                className={`list-inside text-[#9F9FA9] space-y-1.5 ${
                  block.data.style === "ordered"
                    ? "list-decimal"
                    : "list-disc"
                }`}
                style={{
                  fontFamily: '"Nimbus Sans", sans-serif',
                  paddingLeft: "1.25rem",
                }}
              >
                {(block.data.items || []).map((item, idx) => (
                  <li
                    key={idx}
                    dangerouslySetInnerHTML={{ __html: item }}
                  />
                ))}
              </ListTag>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
