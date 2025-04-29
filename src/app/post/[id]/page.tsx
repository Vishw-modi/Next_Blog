import { prisma } from "@/app/utils/db";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

async function getData(id: string) {
  const data = await prisma.blogPost.findUnique({
    where: {
      id: id,
    },
  });

  if (!data) {
    return notFound();
  }
  return data;
}

type Params = Promise<{ id: string }>;

export default async function Idpage({ params }: { params: Params }) {
  const { id } = await params;
  const data = await getData(id);

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <Link href="/" className={buttonVariants({ variant: "secondary" })}>
        ← Back to Posts
      </Link>

      <article className="mt-6 space-y-8">
        {/* Title & Author */}
        <div>
          <h1 className="text-4xl font-bold tracking-tight mb-4 text-gray-900 dark:text-white">
            {data.title}
          </h1>

          <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-300">
            <div className="flex items-center space-x-2">
              <div className="relative w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src={data.authorImage}
                  alt={data.authorName}
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-medium">{data.authorName}</span>
            </div>
            <span>•</span>
            <span>
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              }).format(data.createdAt)}
            </span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative w-full h-[300px] sm:h-[400px] rounded-xl overflow-hidden shadow-md">
          <Image
            src={data.imageUrl}
            alt="Post Image"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Post Content */}
        <Card className="shadow-lg">
          <CardContent className="prose dark:prose-invert max-w-none text-base leading-relaxed">
            <p>{data.content}</p>
          </CardContent>
        </Card>
      </article>
    </div>
  );
}
