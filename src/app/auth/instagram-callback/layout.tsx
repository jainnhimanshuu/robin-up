import { Suspense } from "react";

const InstagramCallbackLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>;
};

export default InstagramCallbackLayout;
