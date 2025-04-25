import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
const Navbar = async () => {
  const user = await currentUser();
  return (
    <nav className="py-5 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <Link href="/">
          <h1 className="text-3xl font-semibold">
            Blog
            <span className="text-blue-600">Marshel</span>
          </h1>
        </Link>
        <div className="hidden sm:flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium hover:text-blue-500 transition-colors"
          >
            Home
          </Link>
          {user ? (
            <Link
              href="/dashboard"
              className="text-sm font-medium hover:text-blue-500 transition-colors"
            >
              DashBoard
            </Link>
          ) : (
            <SignInButton
              mode="modal"
              className="text-sm font-medium hover:text-blue-500 transition-colors"
              forceRedirectUrl="/dashboard"
            >
              DashBoard
            </SignInButton>
          )}
        </div>
      </div>
      <div className="flex items-center space-x-4">
        {user ? (
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">
              Welcome, {user?.firstName || "User"}
            </span>
            <UserButton afterSignOutUrl="/" />
          </div>
        ) : (
          <SignInButton mode="modal">
            <Button variant="outline" size="sm">
              Sign In
            </Button>
          </SignInButton>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
