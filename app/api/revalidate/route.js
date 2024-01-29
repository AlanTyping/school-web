import { revalidatePath } from "next/cache";

export async function GET() {

  return Response.json({ revalidated: true });
};