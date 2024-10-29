import React from "react";
import Link from "next/link";
import LoginForm from "../components/loginForm";

export default function Login() {
  return (
    <>
      <h2 className="font-bold text-3xl text-neutral-800 dark:text-neutral-200">
        Login in to your account{" "}
      </h2>
      <p className="text-neutral-400 text-sm max-w-sm mt-4 dark:text-neutral-300">
        Unlock the power of influencer marketing. Connect with top creators,
        build partnerships.
      </p>

      <LoginForm />

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
