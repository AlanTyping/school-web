import { revalidateTag } from "next/cache";

export async function GET() {
  revalidateTag("posts");

  return Response.json({ message: "hola" })
};