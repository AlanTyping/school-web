import { revalidateTag } from "next/cache";

export async function GET() {
  revalidateTag("posts");

  return {
    body: JSON.stringify({ revalidated: true }),
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
  };
};