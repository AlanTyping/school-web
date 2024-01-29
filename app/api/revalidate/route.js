import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";
import { unstable_noStore as noStore } from 'next/cache';

export const dynamic = 'force-dynamic'

export async function GET() {
  revalidateTag("posts");

  return NextResponse.json({revalidated: true}, {
    headers: {
      'Cache-Control': 'no-store'
    }
  });
};