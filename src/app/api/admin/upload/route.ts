export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { checkAuth } from "@/lib/auth";
import crypto from "crypto";

export async function POST(req: Request) {
  const authenticated = await checkAuth();
  if (!authenticated) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;
    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    const apiKey = process.env.CLOUDINARY_API_KEY;
    const apiSecret = process.env.CLOUDINARY_API_SECRET;

    if (!cloudName || !apiKey || !apiSecret) {
      return NextResponse.json(
        { error: "Cloudinary credentials are not configured in environment variables." },
        { status: 500 }
      );
    }

    // Convert File to Buffer and then Base64 for Cloudinary upload
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64File = `data:${file.type};base64,${buffer.toString("base64")}`;

    const timestamp = Math.round(new Date().getTime() / 1000);
    // Cloudinary signature parameters must be sorted alphabetically
    const paramsToSign = `timestamp=${timestamp}`;
    
    const signature = crypto
      .createHash("sha1")
      .update(paramsToSign + apiSecret)
      .digest("hex");

    // Construct request body for Cloudinary API
    const cloudinaryFormData = new FormData();
    cloudinaryFormData.append("file", base64File);
    cloudinaryFormData.append("api_key", apiKey);
    cloudinaryFormData.append("timestamp", timestamp.toString());
    cloudinaryFormData.append("signature", signature);

    const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
    
    const res = await fetch(cloudinaryUrl, {
      method: "POST",
      body: cloudinaryFormData,
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Cloudinary upload failed:", errorText);
      return NextResponse.json(
        { error: `Cloudinary upload failed: ${errorText}` },
        { status: 500 }
      );
    }

    const data = await res.json();
    return NextResponse.json({ url: data.secure_url });
  } catch (err: any) {
    console.error("Upload API Route Handler error:", err);
    return NextResponse.json({ error: err.message || "Failed to upload image" }, { status: 500 });
  }
}
