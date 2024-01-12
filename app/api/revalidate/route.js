import { revalidateTag } from "next/cache";

export async function GET() {
  try {
    revalidateTag("posts");

  return Response.json({message: "hola"})
  } catch (error) {
    console.log(error)
  }
};