"use client";
import { postData } from "@/app/action";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const page = () => {
  return (
    <Card className="max-w-lg mx-auto">
      <CardHeader>
        <CardTitle>Create Post</CardTitle>
        <CardDescription>Create a new Post to the world</CardDescription>
      </CardHeader>
      <CardContent>
        <form action={postData} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label>Title</Label>
            <Input name="title" required placeholder="Title" type="text" />
          </div>
          <div className="flex flex-col gap-2">
            <Label>Content</Label>
            <Textarea name="content" required placeholder="Content" />
          </div>
          <div className="flex flex-col gap-2">
            <Label>Image Url</Label>
            <Input name="url" required type="url" placeholder="Image Url" />
          </div>
          <Button>Create Post</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default page;
