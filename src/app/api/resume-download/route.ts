import { NextResponse } from "next/server";
import { kv } from "@vercel/kv";

const RESUME_DOWNLOADS_KEY = "portfolio:resume_downloads";

export async function GET() {
  try {
    if (!process.env.KV_REST_API_URL || !process.env.KV_REST_API_TOKEN) {
      return NextResponse.json({ available: false, count: null });
    }
    const count = (await kv.get<number>(RESUME_DOWNLOADS_KEY)) ?? 0;
    return NextResponse.json({ available: true, count });
  } catch (err) {
    console.error("Resume tracking GET error:", err);
    return NextResponse.json({ available: false, count: null });
  }
}

export async function POST() {
  try {
    if (!process.env.KV_REST_API_URL || !process.env.KV_REST_API_TOKEN) {
      return NextResponse.json({ available: false, count: null });
    }
    const count = await kv.incr(RESUME_DOWNLOADS_KEY);
    return NextResponse.json({ available: true, count });
  } catch (err) {
    console.error("Resume tracking POST error:", err);
    return NextResponse.json({ available: false, count: null });
  }
}
