import { Badge } from "./ui/badge";
import { useRouter } from "next/navigation";

const NewsItem = ({
  id,
  title,
  description,
  date,
}: {
  id: string;
  title: string;
  description: string;
  date: string;
}) => {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.push(`/newsletter/${id}`);
      }}
      key={id}
      className="flex flex-col gap-1 border-x-0 p-4 border rounded-sm bg-white dark:bg-zinc-900 cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all ease-in-out"
    >
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
        <Badge variant="secondary" className="w-fit">
          {date}
        </Badge>
      </div>
    </div>
  );
};

export default NewsItem;
