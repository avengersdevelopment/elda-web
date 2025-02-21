"use client";

import { PlusIcon } from "lucide-react";
import Link from "next/link";

export default function Container() {
  return (
    <section className="relative min-h-screen w-full bg-[#F2F2F2] pt-12">
      <div className="h-[72px] px-4">
        <div className="flex items-center justify-between">
          <p className="text-3xl font-semibold text-black">Memo</p>
          <Link href="/">
            <button className="rounded-full bg-black p-2">
              <PlusIcon className="h-6 w-6 text-white" />
            </button>
          </Link>
        </div>
      </div>
      <div className="h-[calc(100vh-120px)] w-full">
        <div className="px-4 pb-16 pt-6">
          <div className="mb-8">
            <div className="mb-4 flex items-center justify-between gap-2">
              <h4 className="text-base font-semibold text-black">Today</h4>
            </div>
            <div className="rounded-2xl bg-white p-4">
              <div className="flex h-full flex-col justify-between">
                <p className="mb-2 text-base font-normal text-black">
                  Explore the Design Brief
                </p>
                <p className="text-xs font-normal text-black/25">
                  {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
