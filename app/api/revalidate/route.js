import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function GET() {
  revalidateTag("posts");

  console.log("Current request")

  return NextResponse.json({revalidated: true});
};