"use client";

import { HomeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AssistModal from "./assist-modal";

export default function Nav() {
  const [isOpenAssistant, setIsOpenAssistant] = useState<boolean>(true);

  return (
    <>
      <div className="absolute bottom-0 left-0 w-full">
        <div className="w-full bg-white p-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <div className="flex flex-col items-center gap-2">
                <HomeIcon className="h-5 w-5 text-[#919191]" />
                <p className="text-xs font-semibold text-[#919191]">Home</p>
              </div>
            </Link>
            <Link href="/">
              <div className="flex flex-col items-center gap-2">
                <HomeIcon className="h-5 w-5 text-[#919191]" />
                <p className="text-xs font-semibold text-[#919191]">
                  Community
                </p>
              </div>
            </Link>
            <div className="-mx-4 -mt-16">
              <button
                className="h-20 w-20 rounded-full bg-[#4499FF]"
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
            <Link href="/">
              <div className="flex flex-col items-center gap-2">
                <HomeIcon className="h-5 w-5 text-[#919191]" />
                <p className="text-xs font-semibold text-[#919191]">
                  Quick Help
                </p>
              </div>
            </Link>
            <Link href="/">
              <div className="flex flex-col items-center gap-2">
                <HomeIcon className="h-5 w-5 text-[#919191]" />
                <p className="text-xs font-semibold text-[#919191]">Profile</p>
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
