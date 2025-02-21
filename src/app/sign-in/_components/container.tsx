import { EyeIcon } from "lucide-react";
import React from "react";

export default function Container() {
  return (
    <section className="h-screen w-full bg-[#0D6BDC]">
      <div className="flex h-full flex-col justify-end">
        <div>
          <div className="mb-4 p-4">
            <h2 className="mb-2 text-3xl font-bold text-white">Log In </h2>
            <p className="text-base text-white">
              Welcome back, log into your account!
            </p>
          </div>
          <div className="rounded-t-3xl bg-white px-4 pb-16 pt-8">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-[#1C1B55]">
                  Email
                </label>
                <input
                  type="text"
                  className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-[#0D6BDC]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-semibold text-[#1C1B55]">
                    Password
                  </label>
                  <button className="text-sm text-[#9797C9]">
                    Forgot Password?
                  </button>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-[#0D6BDC]"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2">
                    <EyeIcon className="h-5 w-5 text-[#ADADAD]" />
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <button className="w-full rounded-full bg-[#0D6BDC] px-8 py-4">
                  <p className="text-base font-semibold text-white">Login</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
