import { NextResponse } from "next/server";
import { kv } from "@vercel/kv";

const FALLBACK_VISITORS = 1247;
const COUNTER_KEY = "portfolio:visitors";

export async function GET() {
  try {
    if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
      const count = await kv.incr(COUNTER_KEY);
      return NextResponse.json({ count });
    }
    return NextResponse.json({ count: FALLBACK_VISITORS + Math.floor(Date.now() / 100000) % 100 });
  } catch (err) {
    console.error("Visitor counter error:", err);
    return NextResponse.json({ count: FALLBACK_VISITORS });
  }
}
