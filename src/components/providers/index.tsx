"use client";

import React from "react";
import Nav from "../nav";
import { usePathname } from "next/navigation";
import { AppProgressBar } from "next-nprogress-bar";

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  const pathname = usePathname();

  const isHome =
    pathname !== "/sign-in" &&
    pathname !== "/sign-up" &&
    pathname !== "/onboard";

  return (
    <div>
      <AppProgressBar
        height="4px"
        color={"#0D6BDC"}
        options={{ showSpinner: false }}
        shallowRouting
      />
      {children}
      {isHome && <Nav />}
    </div>
  );
}
