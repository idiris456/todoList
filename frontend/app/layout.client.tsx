"use client";

import { ReactQueryProvider } from "@/providers/ReactQueryProvider";
import { FC, ReactNode } from "react";

interface LayoutClientProvider {
  children: ReactNode;
}
const LayoutClient: FC<LayoutClientProvider> = ({ children }) => {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
};

export default LayoutClient;
