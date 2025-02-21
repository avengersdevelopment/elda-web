"use client";

import Image from "next/image";

export default function Container() {
  return (
    <section className="h-screen w-full bg-white pt-12">
      <div className="px-4">
        <div>
          <div className="h-2 w-full rounded-full bg-[#D9D9D9]"></div>
          <div className="-mt-2 h-2 w-1/3 rounded-full bg-[#0D6BDC]"></div>
        </div>
        <div className="mt-8 flex items-center justify-center">
          <div className="h-32 w-32 rounded-full border-2 border-[#0D6BDC] bg-white"></div>
        </div>
        <div className="mt-12 flex flex-col gap-4">
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
              <div className="rounded-lg rounded-tl-none bg-[#F7F7F7] p-4">
                <p className="text-xs font-medium leading-5 text-black">
                  Hey, I&apos;m MeetGeek AI, your personal meeting assistant. Do
                  you want to know something about this meeting?!
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="flex w-[85%] items-start gap-2">
              <div className="rounded-lg rounded-tr-none bg-[#147FFF]/10 p-4">
                <p className="text-xs font-medium leading-5 text-[#147FFF]">
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
      <div className="fixed bottom-0 left-0 w-full">
        <div className="w-full p-4 pb-8">
          <div className="mb-4 grid grid-cols-2 gap-2">
            <button className="group rounded-full border border-[#E5E7EB] bg-white px-4 py-2 hover:bg-[#147FFF]">
              <p className="text-sm font-normal text-[#9CA3AF] group-hover:text-white">
                Yes
              </p>
            </button>
            <button className="group rounded-full border border-[#E5E7EB] bg-white px-4 py-2 hover:bg-[#147FFF]">
              <p className="text-sm font-normal text-[#9CA3AF] group-hover:text-white">
                No
              </p>
            </button>
          </div>
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <button className="group rounded-full border border-[#E5E7EB] bg-white px-4 py-2 hover:bg-[#147FFF]">
              <p className="text-sm font-normal text-[#9CA3AF] group-hover:text-white">
                Lets Go
              </p>
            </button>
            <button className="group rounded-full border border-[#E5E7EB] bg-white px-4 py-2 hover:bg-[#147FFF]">
              <p className="text-sm font-normal text-[#9CA3AF] group-hover:text-white">
                Lets Go
              </p>
            </button>
          </div>
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
