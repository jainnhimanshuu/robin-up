import React from "react";

type Props = {
  children: React.ReactNode;
  htmlFor: string;
};
export default function Label({ children, htmlFor }: Props) {
  return (
    <label className="text-xs text-slate-500" htmlFor={htmlFor}>
      {children}
    </label>
  );
}
