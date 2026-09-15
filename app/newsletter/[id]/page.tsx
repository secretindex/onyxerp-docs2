import { createClient } from "@/utils/supabase/client";

const NewsletterPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const supabase = createClient();
  const { data: newsletter, error } = await supabase
    .from("updates")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error("Error fetching newsletter:", error);
    return <div>Error loading newsletter.</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{newsletter.title}</h1>
      <p className="mb-4">{newsletter.content}</p>
      <p className="text-sm text-gray-500">
        Published on: {new Date(newsletter.created_at).toLocaleDateString()}
      </p>
    </div>
  );
};

export default NewsletterPage;
