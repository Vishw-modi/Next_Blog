import { prisma } from "./utils/db";

const getData = async () => {
  const data = await prisma.blogPost.findMany({
    select: {
      title: true,
      content: true,
      imageUrl: true,
      authorName: true,
      authorImage: true,
      id: true,
      createdAt: true,
    },
  });
  return data;
};

export default async function Home() {
  const data = await getData();

  return (
    <div className="py-6">
      <h1 className="text-3xl font-bold tracking-tight">Latest Posts</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item) => (
          <h1
            key={item.id}
            className="border-2 rounded-md flex justify-center items-center "
          >
            {item.title}
          </h1>
        ))}
      </div>
    </div>
  );
}
