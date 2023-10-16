import React from "react";
import { useRouter } from "next/router";

export const ViewPage = () => {
  const router = useRouter();
  return <div>{router.query.viewId}</div>;
};
