import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { topic } = await req.json();

  // Placeholder blog content
  const blog = `This is a placeholder blog for the topic: "${topic}".`;

  return NextResponse.json({ blog });
}