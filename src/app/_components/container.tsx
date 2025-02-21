import {
  EllipsisIcon,
  PlusIcon,
  TimerIcon
} from "lucide-react";
import Link from "next/link";

export default function Container() {
  return (
    <section className="relative min-h-screen w-full bg-[#F2F2F2] pt-12">
      <div className="px-4 pb-4">
        <p className="text-sm font-normal text-black">Good Morning,</p>
        <p className="text-2xl font-semibold text-black">Danique!</p>
      </div>
      <div className="h-[calc(100vh-116px)] w-full rounded-t-3xl bg-white">
        <div className="px-4 pb-16 pt-6">
          <div className="mb-4">
            <p className="text-sm font-normal text-black">Monday</p>
            <p className="text-2xl font-semibold text-black">03 Dec</p>
          </div>
          <div className="mb-8 grid grid-cols-2 items-center gap-2">
            <Link href="/memo/add">
              <button className="w-full rounded-full border border-[#02BA62] px-4 py-2.5">
                <p className="text-sm font-semibold text-[#02BA62]">Add Memo</p>
              </button>
            </Link>
            <Link href="/memo/add">
              <button className="w-full rounded-full border border-[#FF4242] px-4 py-2.5">
                <p className="text-sm font-semibold text-[#FF4242]">
                  Contact My Family
                </p>
              </button>
            </Link>
          </div>
          <div className="mb-8">
            <div className="mb-4 flex items-center justify-between gap-2">
              <h4 className="text-base font-semibold text-black">
                Reminder Overview
              </h4>
              <Link href="/reminder">
                <button className="flex items-center gap-2">
                  <PlusIcon className="h-4 w-4 text-black" />
                  <p className="text-xs font-normal text-black">Add Task</p>
                </button>
              </Link>
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
                  <div className="flex items-center gap-2 rounded-full bg-white/10 p-1 pr-4">
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
            <div className="rounded-2xl bg-[#616161] p-4">
              <div className="flex h-full flex-col justify-between">
                <div className="mb-8 flex items-center justify-between gap-2">
                  <p className="text-base font-normal text-white">#616161</p>
                  <button>
                    <EllipsisIcon className="h-6 w-6 text-white" />
                  </button>
                </div>
                <div className="flex justify-start gap-2">
                  <div className="flex items-center gap-2 rounded-full bg-white/10 p-1 pr-4">
                    <div className="rounded-full border border-white p-1">
                      <TimerIcon className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-xs font-normal text-white">15.30</p>
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-1">
                    <p className="text-xs font-normal text-white">Everyday</p>
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
