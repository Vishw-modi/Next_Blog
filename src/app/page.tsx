import { BlogPostCard } from "@/components/general/BlogPostCard";
import { prisma } from "./utils/db";
import { Suspense } from "react";
import StreamingLoader from "@/components/general/StreamingLoader";

const getData = async () => {
  await new Promise((reslove) => {
    setTimeout(reslove, 2000);
  });
  const data = await prisma.blogPost.findMany({
    select: {
      title: true,
      content: true,
      imageUrl: true,
      authorName: true,
      authorImage: true,
      id: true,
      createdAt: true,
      updatedAt: true,
      authorId: true,
    },
  });
  return data;
};

export default function Home() {
  return (
    <div className="py-6">
      <h1 className="text-3xl font-bold tracking-tight">Latest Posts</h1>
      <Suspense fallback={<StreamingLoader />}>
        <BlogPosts />
      </Suspense>
    </div>
  );
}

async function BlogPosts() {
  const data = await getData();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((item) => (
        <BlogPostCard data={item} key={item.id} />
      ))}
    </div>
  );
}
