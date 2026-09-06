import { NextResponse } from "next/server";
import { kv } from "@vercel/kv";

const COUNTER_KEY = "portfolio:resume_downloads";

export async function POST() {
  try {
    if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
      const count = await kv.incr(COUNTER_KEY);
      return NextResponse.json({ count });
    }
    return NextResponse.json({ count: 0, mocked: true });
  } catch (err) {
    console.error("Resume download error:", err);
    return NextResponse.json({ count: 0, mocked: true });
  }
}

export async function GET() {
  try {
    if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
      const count = (await kv.get<number>(COUNTER_KEY)) ?? 0;
      return NextResponse.json({ count });
    }
    return NextResponse.json({ count: 0, mocked: true });
  } catch (err) {
    console.error("Resume download GET error:", err);
    return NextResponse.json({ count: 0, mocked: true });
  }
}
