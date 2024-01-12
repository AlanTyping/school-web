import { revalidateTag } from "next/cache";

export async function GET() {
  revalidateTag("posts");

  return { body: JSON.stringify({ revalidated: true }), status: 200, headers: { "Content-Type": "application/json" } };
};