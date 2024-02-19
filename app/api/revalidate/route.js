import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";
import { unstable_noStore as noStore } from 'next/cache';

export const revalidate = 0;
export const dynamic = 'force-dynamic'

export async function GET() {
  noStore()
  revalidateTag(["posts"]);
  revalidateTag(["eventos"]);

  return NextResponse.json({revalidated: true});
};