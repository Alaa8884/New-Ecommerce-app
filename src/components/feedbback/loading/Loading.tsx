import React from "react";
import { TLoading } from "@customTypes/shared";

type LoadingProps = {
  loading: TLoading;
  error: null | string;
  children: React.ReactNode;
};

function Loading({ loading, error, children }: LoadingProps) {
  if (loading === "pending") {
    return <p>Loading please wait....</p>;
  }
  if (loading === "failed") {
    return <p>{error}</p>;
  }
  return <>{children}</>;
}

export default Loading;
