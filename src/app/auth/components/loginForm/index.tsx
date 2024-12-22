"use client";
import { Button } from "@nextui-org/react";
import Label from "@rbu/components/form/Label";
import LabelInputContainer from "@rbu/components/form/LabelInputContainer";
import { CommonUtils, Logger } from "@rbu/helpers";
import { useForm } from "@rbu/hooks";
import { Link } from "lucide-react";
import { Input } from "@rbu/components";
import React from "react";
import { URLProvider } from "@rbu/providers";
import { useRouter } from "next/navigation";
import { URLMap } from "@rbu/constants/urlMap";

const LoginForm = () => {
  const router = useRouter();
  const { values, handleChange } = useForm({ email: "", password: "" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = values;

    const isValidEmail = CommonUtils.validEmail(email);
    const isValidPwd = password.length > 0;

    if (isValidEmail && isValidPwd) {
      try {
        const response = await fetch(URLProvider.getLoginUrl(), {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
          throw new Error("Failed to login");
        }
        Logger.logMessage("[Login]: response ", response);
        const data = await response.json();

        Logger.logMessage("[Login]: ", data);

        router.push(URLMap.PROFILE_PAGE + "/" + data?.influencerUsername);
      } catch (err) {
        Logger.logError("[Err][Login]: ", err);
      }
    } else {
      alert("Please check your credentials");
    }
  };

  return (
    <>
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
          type="submit"
        >
          Login
        </Button>
      </form>
    </>
  );
};

export default LoginForm;
