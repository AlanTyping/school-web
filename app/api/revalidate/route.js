import { revalidatePath } from "next/cache";

export async function GET() {
  revalidatePath('/');
  revalidatePath('/posts');

  return Response.json({ revalidated: true });
};