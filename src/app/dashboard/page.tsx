import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React, { Suspense } from "react";
import { prisma } from "../utils/db";
import { currentUser } from "@clerk/nextjs/server";
import { BlogPostCard } from "@/components/general/BlogPostCard";
import StreamingLoader from "@/components/general/StreamingLoader";

async function getData(userId?: string) {
  const data = await prisma.blogPost.findMany({
    where: {
      authorId: userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return data;
}

async function PostsData() {
  const user = await currentUser();
  const data = await getData(user?.id);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((item) => (
        <BlogPostCard key={item.id} data={item} />
      ))}
    </div>
  );
}

const page = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-medium">Your Blog Article</h2>
        <Link className={buttonVariants()} href="/dashboard/create">
          Create Post
        </Link>
      </div>

      <Suspense fallback={<StreamingLoader />}>
        <PostsData />
      </Suspense>
    </div>
  );
};

export default page;
