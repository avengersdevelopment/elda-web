"use client";

import { ContactRoundIcon, HandHeartIcon, HomeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AssistModal from "./assist-modal";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/classnames";
export default function Nav() {
  const pathname = usePathname();

  const [isOpenAssistant, setIsOpenAssistant] = useState<boolean>(false);

  const isNavActive = (path: string) => {
    return pathname === path;
  };

  return (
    <>
      <div className="fixed bottom-0 left-0 w-full">
        <div className="w-full bg-white p-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <div className="flex flex-col items-center gap-1">
                <HomeIcon
                  className={cn(
                    "h-5 w-5 text-[#919191]",
                    isNavActive("/") && "text-[#0D6BDC]",
                  )}
                />
                <p
                  className={cn(
                    "text-xs font-semibold text-[#919191]",
                    isNavActive("/") && "text-[#0D6BDC]",
                  )}
                >
                  Home
                </p>
              </div>
            </Link>
            <Link href="/memo">
              <div className="flex flex-col items-center gap-1">
                <ContactRoundIcon
                  className={cn(
                    "h-5 w-5 text-[#919191]",
                    isNavActive("/memo") && "text-[#0D6BDC]",
                  )}
                />
                <p
                  className={cn(
                    "text-xs font-semibold text-[#919191]",
                    isNavActive("/memo") && "text-[#0D6BDC]",
                  )}
                >
                  Memo
                </p>
              </div>
            </Link>
            <div className="-mx-4 -mt-16">
              <button
                className="h-16 w-16 rounded-full bg-[#4499FF]"
                onClick={() => setIsOpenAssistant(true)}
              >
                <div className="flex items-center justify-center">
                  <Image
                    src="/assets/home/assist-icon.svg"
                    alt=""
                    width={240}
                    height={240}
                    className="h-8 w-8"
                  />
                </div>
              </button>
            </div>
            <Link href="/guide">
              <div className="flex flex-col items-center gap-1">
                <HandHeartIcon
                  className={cn(
                    "h-5 w-5 text-[#919191]",
                    isNavActive("/guide") && "text-[#0D6BDC]",
                  )}
                />
                <p
                  className={cn(
                    "text-xs font-semibold text-[#919191]",
                    isNavActive("/guide") && "text-[#0D6BDC]",
                  )}
                >
                  Guide
                </p>
              </div>
            </Link>
            <Link href="/profile">
              <div className="flex flex-col items-center gap-1">
                <HomeIcon
                  className={cn(
                    "h-5 w-5 text-[#919191]",
                    isNavActive("/profile") && "text-[#0D6BDC]",
                  )}
                />
                <p
                  className={cn(
                    "text-xs font-semibold text-[#919191]",
                    isNavActive("/profile") && "text-[#0D6BDC]",
                  )}
                >
                  Profile
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <AssistModal
        isOpen={isOpenAssistant}
        onClose={() => setIsOpenAssistant(false)}
      />
    </>
  );
}
