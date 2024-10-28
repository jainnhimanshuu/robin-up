"use client";
import React from "react";
import { Input } from "@rbu/components";
import Label from "@rbu/components/form/Label";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import LabelInputContainer from "@rbu/components/form/LabelInputContainer";
import { useForm } from "@rbu/hooks";

export default function SignUp() {
  const { values, handleChange } = useForm({ email: "", password: "" });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted", values);
  };
  return (
    <>
      <h2 className="font-bold text-3xl text-neutral-800 dark:text-neutral-200">
        Join RobinUp Today
      </h2>
      <p className="text-neutral-400 text-sm max-w-sm mt-4 dark:text-neutral-300">
        Whether you&apos;re an influencer looking to offer your services or a
        brand ready to collaborate, RobinUp is the place to connect.
      </p>
      <form className="mt-6" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            name="email"
            placeholder="hi@robinup.com"
            type="email"
            value={values.email as string}
            onChange={handleChange}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            placeholder="••••••••"
            type="password"
            value={values.password as string}
            onChange={handleChange}
          />
        </LabelInputContainer>

        <div className="flex justify-center flex-col mt-6 mb-8">
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              name="emailSub"
              id="emailSub"
              className="mr-2"
              checked
            />
            <Label htmlFor="emailSub">
              I would like to hear about RobinUp updates and special offers.
            </Label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="termsAndCondition"
              id="termsAndCondition"
              className="mr-2"
            />
            <Label htmlFor="termsAndCondition">
              I accept the Terms of use and Privacy Policy
            </Label>
          </div>
        </div>

        <Button
          radius="sm"
          fullWidth
          className="bg-blue-500 text-slate-50 h-12"
        >
          Sign Up
        </Button>
      </form>
      <div className="flex items-center justify-center mt-4">
        <p className="text-slate-400 text-xs mr-1">Already have an account?</p>
        <Link
          href="/auth/login"
          className="text-blue-600 underline text-xs font-bold cursor-pointer"
        >
          Login
        </Link>
      </div>
    </>
  );
}
