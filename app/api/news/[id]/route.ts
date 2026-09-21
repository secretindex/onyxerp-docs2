import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export async function GET({ params }: { params: Promise<{ slug: string }> }) {
  const supabase = createClient(await cookies());
  const { slug } = await params;
  console.log(slug);

  try {
    const { data, error } = await supabase
      .from("updates")
      .select("*")
      .eq("id", slug);

    if (error) {
      throw new Error(error.message);
    }

    return Response.json({ data: data });
  } catch (error) {
    return Response.json({
      message: "Ocorreu um erro: " + error,
      status: "fail",
    });
  }
}
