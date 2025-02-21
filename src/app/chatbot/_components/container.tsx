"use client";

import { ArrowLeftIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Container() {
  return (
    <section className="h-screen w-full bg-[#F9FAFB]">
      <div className="flex items-center gap-2 bg-white px-2 pb-2 pt-12">
        <Link href="/">
          <button className="p-2">
            <ArrowLeftIcon className="h-5 w-5 text-black" />
          </button>
        </Link>
        <h4 className="text-base font-semibold text-black">AI Assistance</h4>
      </div>
      <div className="px-4 pb-16 pt-4">
        <div className="mb-4 flex items-center justify-center">
          <div className="h-32 w-32 rounded-full border-2 border-[#0D6BDC] bg-white"></div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex justify-start">
            <div className="flex w-[85%] items-start gap-2">
              <div>
                <Image
                  src="/assets/onboard/bot.svg"
                  alt="profile"
                  width={240}
                  height={240}
                  className="h-8 min-h-8 w-8 min-w-8"
                />
              </div>
              <div className="rounded-lg rounded-tl-none bg-white p-4">
                <p className="text-xs font-medium leading-5 text-black">
                  Hey, I&apos;m MeetGeek AI, your personal meeting assistant. Do
                  you want to know something about this meeting?!
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="flex w-[85%] items-start gap-2">
              <div className="rounded-lg rounded-tr-none bg-[#147FFF] p-4">
                <p className="text-xs font-medium leading-5 text-white">
                  Hey, Im MeetGeek AI, your personal meeting assistant. Do you
                  want to know something about this meeting? Hey, Im MeetGeek
                  AI, your personal meeting assistant. Do you want to know
                  something about this meeting?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 w-full bg-white">
        <div className="w-full p-4 pb-8">
          <div className="flex w-full items-center gap-2">
            <input
              type="text"
              className="text-normal w-full rounded-full border border-gray-300 bg-[#F7F7F7] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D6BDC]"
              placeholder="Type to message elda... "
            />
            <button>
              <Image
                src="/assets/onboard/btn-voice.svg"
                alt="mic"
                width={240}
                height={240}
                className="h-10 min-h-10 w-10 min-w-10"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
