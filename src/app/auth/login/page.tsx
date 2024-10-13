"use client";
import React, { FC } from "react";
import { Input } from "@rbu/components";
import { cn } from "@rbu/helpers";
import Label from "@rbu/components/form/Label";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function Login() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <>
      <h2 className="font-bold text-3xl text-neutral-800 dark:text-neutral-200">
        Login in to your account{" "}
      </h2>
      <p className="text-neutral-400 text-sm max-w-sm mt-4 dark:text-neutral-300">
        Unlock the power of influencer marketing. Connect with top creators,
        build partnerships.
      </p>
      <form className="mt-6" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="hi@robinup.com" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input id="password" placeholder="••••••••" type="password" />
        </LabelInputContainer>

        <div className="flex items-center justify-between mt-6 mb-8">
          <div className="flex items-center">
            <input
              type="checkbox"
              name="remember"
              id="remember"
              className="mr-2"
            />
            <Label htmlFor="remember">Keep me signed in</Label>
          </div>
          <Link
            href="/auth/forgot-password"
            className="text-blue-600 font-bold text-xs cursor-pointer"
          >
            Forgot Password
          </Link>
        </div>

        <Button
          radius="sm"
          fullWidth
          className="bg-blue-500 text-slate-50 h-12"
        >
          Login
        </Button>
      </form>
      <div className="flex items-center justify-center mt-4">
        <p className="text-slate-400 text-xs mr-1">Not registered yet?</p>
        <Link
          href="/auth/signup"
          className="text-blue-600 underline text-xs font-bold cursor-pointer"
        >
          Create a new account
        </Link>
      </div>
    </>
  );
}

const LabelInputContainer: FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
