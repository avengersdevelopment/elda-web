"use client";

import { EllipsisIcon, PlusIcon, TimerIcon } from "lucide-react";
import Link from "next/link";

export default function Container() {
  return (
    <section className="relative min-h-screen w-full bg-[#F2F2F2] pt-12">
      <div className="h-[72px] px-4">
        <div className="flex items-center justify-between">
          <p className="text-3xl font-semibold text-black">Guide</p>
          <Link href="/">
            <button className="rounded-full bg-black p-2">
              <PlusIcon className="h-6 w-6 text-white" />
            </button>
          </Link>
        </div>
      </div>
      <div className="h-[calc(100vh-120px)] w-full rounded-t-3xl bg-white">
        <div className="px-4 pb-16 pt-6">
          <div className="mb-8">
            <div className="mb-4 flex items-center justify-between gap-2">
              <h4 className="text-base font-semibold text-black">
                Reminder Overview
              </h4>
            </div>
            <div className="rounded-2xl bg-[#147FFF] p-4">
              <div className="flex h-full flex-col justify-between">
                <div className="mb-8 flex items-center justify-between gap-2">
                  <p className="text-base font-normal text-white">
                    Explore the Design Brief
                  </p>
                  <button>
                    <EllipsisIcon className="h-6 w-6 text-white" />
                  </button>
                </div>
                <div className="flex justify-start">
                  <div className="flex items-center gap-2 rounded-full bg-white/25 p-1 pr-4">
                    <div className="rounded-full border border-white p-1">
                      <TimerIcon className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-xs font-normal text-white">15.30</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-8">
            <div className="mb-4 flex items-center justify-between gap-2">
              <h4 className="text-base font-semibold text-black">
                Upcoming Schedule
              </h4>
            </div>
            <div className="rounded-2xl bg-[#D1D1D1] p-4">
              <div className="flex h-full flex-col justify-between">
                <div className="mb-8 flex items-center justify-between gap-2">
                  <p className="text-base font-normal text-black">
                    Explore the Design Brief
                  </p>
                  <button>
                    <EllipsisIcon className="h-6 w-6 text-black" />
                  </button>
                </div>
                <div className="flex justify-start gap-2">
                  <div className="flex items-center gap-2 rounded-full bg-white/25 p-1 pr-4">
                    <div className="rounded-full border border-black p-1">
                      <TimerIcon className="h-4 w-4 text-black" />
                    </div>
                    <p className="text-xs font-normal text-black">15.30</p>
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-white/25 px-4 py-1">
                    <p className="text-xs font-normal text-black">Everyday</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
