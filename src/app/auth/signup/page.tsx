"use client";
import React, { useEffect } from "react";
import { Input } from "@rbu/components";
import Label from "@rbu/components/form/Label";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import LabelInputContainer from "@rbu/components/form/LabelInputContainer";
import { useForm } from "react-hook-form";
import { useDebounce } from "@rbu/hooks";
import { URLProvider } from "@rbu/providers";
import { CommonUtils, Logger } from "@rbu/helpers";
import { useRouter } from "next/navigation";
import { URLMap } from "@rbu/constants/urlMap";

type SignUpFormData = {
  email: string;
  password: string;
  username: string;
  emailSub: boolean;
  termsAndCondition: boolean;
};

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
    watch,
  } = useForm<SignUpFormData>();
  const router = useRouter();

  const watchFields = watch<SignUpFormData>([
    "username",
    "email",
    "password",
    "emailSub",
    "termsAndCondition",
  ]);

  const debouncedUsername = useDebounce(watchFields?.username, 500);

  const checkUsernameAvailability = async (username: string) => {
    const url = URLProvider.getCheckUsernameUrl();

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username }),
      });
      const data = await response.json();
      if (!data.available) {
        setError("username", {
          type: "manual",
          message: "Username is already taken",
        });
      } else {
        clearErrors("username");
      }
    } catch (error) {
      console.error("Error checking username availability:", error);
    }
  };

  const onSubmit = async (data: SignUpFormData) => {
    const { username, email, password } = data;
    try {
      const resp = await fetch(URLProvider.getSignupUrl(), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });
      if (resp.ok) {
        router.push(URLMap.PROFILE_PAGE);
      }
    } catch (err) {
      Logger.logError("[Err][SignUp]: ", err);
    }
  };

  useEffect(() => {
    if (debouncedUsername) checkUsernameAvailability(debouncedUsername);
  }, [debouncedUsername]);

  return (
    <>
      <h2 className="font-bold text-3xl text-neutral-800 dark:text-neutral-200">
        Join RobinUp Today
      </h2>
      <p className="text-neutral-400 text-sm max-w-sm mt-4 dark:text-neutral-300">
        Whether you&apos;re an influencer looking to offer your services or a
        brand ready to collaborate, RobinUp is the place to connect.
      </p>
      <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="username">Username</Label>
          <Input
            startIcon={<i className="">@</i>}
            id="username"
            placeholder="robinup"
            type="text"
            error={errors.username}
            {...register("username", { required: "Username is required" })}
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="hi@robinup.com"
            type="email"
            error={errors.email}
            {...register("email", {
              required: "Email is required",
              validate: () =>
                CommonUtils.validEmail(watchFields?.email)
                  ? "Email is Invalid"
                  : true,
            })}
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            placeholder="••••••••"
            type="password"
            error={errors.password}
            {...register("password", {
              required: "Password is required",
            })}
          />
        </LabelInputContainer>

        <div className="flex justify-center flex-col mt-6 mb-8">
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              id="emailSub"
              className="mr-2"
              {...register("emailSub")}
              defaultChecked
            />
            <Label htmlFor="emailSub">
              I would like to hear about RobinUp updates and special offers.
            </Label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="termsAndCondition"
              className="mr-2"
              {...register("termsAndCondition", {
                required: "You must accept the terms and conditions",
              })}
            />
            <Label htmlFor="termsAndCondition">
              I accept the Terms of use and Privacy Policy
            </Label>
          </div>
          {errors.termsAndCondition && (
            <p className="text-red-500 text-sm">
              {errors.termsAndCondition.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
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
          className="text-blue-600 underline text-xs font-bold"
        >
          Login
        </Link>
      </div>
    </>
  );
}
