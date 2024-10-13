import React from "react";

type Props = {
  children: React.ReactNode;
  htmlFor: string;
};
export default function Label({ children, htmlFor }: Props) {
  return <label htmlFor={htmlFor}>{children}</label>;
}
