"use client";

import React from "react";
import Nav from "../nav";
import { usePathname } from "next/navigation";
import { AppProgressBar } from "next-nprogress-bar";
import { ConfigProvider } from "@/store/config";
import { TConfig } from "@/store/config";
import { Toaster } from "../sonner";
interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  const pathname = usePathname();
  const user: TConfig = JSON.parse(localStorage.getItem("user") || "{}");

  const isHome =
    pathname !== "/sign-in" &&
    pathname !== "/sign-up" &&
    pathname !== "/onboard";

  return (
    <ConfigProvider config={user}>
      <AppProgressBar
        height="4px"
        color={"#0D6BDC"}
        options={{ showSpinner: false }}
        shallowRouting
      />
      <Toaster position="top-center" richColors />
      {children}
      {isHome && <Nav />}
    </ConfigProvider>
  );
}
