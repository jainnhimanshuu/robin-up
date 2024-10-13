"use client";
import React, { FC } from "react";
import { Input } from "@rbu/components";
import { cn } from "@rbu/helpers";
import Label from "@rbu/components/form/Label";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function ForgotPassword() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <>
      <h2 className="font-bold text-3xl text-neutral-800 dark:text-neutral-200">
        Forgot Your Password?
      </h2>
      <p className="text-neutral-400 text-sm max-w-sm mt-4 dark:text-neutral-300">
        Don&apos;t worry, it happens to the best of us! Enter your email, and
        we&apos;ll help you reset your password so you can get back to
        connecting with influencers and brands.
      </p>
      <form className="mt-6" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="hi@robinup.com" type="email" />
        </LabelInputContainer>

        <Button
          radius="sm"
          fullWidth
          className="bg-blue-500 text-slate-50 h-12"
        >
          Reset Password
        </Button>
      </form>
      <div className="flex items-center justify-center mt-4">
        <Link
          href="/auth/login"
          className="text-blue-600 underline text-xs font-bold cursor-pointer"
        >
          Back to login
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
