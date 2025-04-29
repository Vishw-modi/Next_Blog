"use server"

import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";
import { prisma } from "./utils/db";

export async function postData(formData: FormData) {
    const user = await currentUser()

    if(!user) {
        return redirect("/")
    }

    const title = formData.get("title")
    const content = formData.get("content")
    const url = formData.get("url")

    await prisma.blogPost.create({
        data: {
            title: title as string,
            content: content as string,
            imageUrl: url as string,
            authorId: user?.id as string,
            authorImage: user?.imageUrl as string,
            authorName: user?.fullName as string
        }
    })

    return redirect("/dashboard")
}

