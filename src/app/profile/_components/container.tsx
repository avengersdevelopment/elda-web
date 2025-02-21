"use client";

import { MapPinIcon, SettingsIcon, UsersIcon } from "lucide-react";

export default function Container() {
  return (
    <section className="relative min-h-screen w-full bg-white pt-12">
      <div className="h-[72px] px-4">
        <div className="flex items-center justify-between">
          <p className="text-3xl font-semibold text-black">Profile</p>
        </div>
      </div>
      <div className="h-[calc(100vh-120px)] w-full">
        <div className="px-4 pb-16">
          <div className="flex flex-col items-center justify-center">
            <div className="mb-4">
              <div className="h-32 w-32 rounded-full border-2 border-[#0D6BDC] bg-white"></div>
            </div>
            <h4 className="text-base font-semibold text-black">
              Danique Sipkes
            </h4>
            <p className="text-sm font-normal text-black/50">Mama</p>
          </div>
          <div className="mb-8 mt-4 w-full border-t border-[#D9D9D9]"></div>
          <div className="flex flex-col gap-4">
            <button className="flex items-center justify-start gap-2 rounded-full bg-[#F3F3F3] px-8 py-4">
              <UsersIcon className="h-4 w-4 text-black/50" />
              <p className="text-sm font-normal text-black/50">Edit Profile</p>
            </button>
            <button className="flex items-center justify-start gap-2 rounded-full bg-[#F3F3F3] px-8 py-4">
              <MapPinIcon className="h-4 w-4 text-black/50" />
              <p className="text-sm font-normal text-black/50">
                Share My Location
              </p>
            </button>
            <button className="flex items-center justify-start gap-2 rounded-full bg-[#F3F3F3] px-8 py-4">
              <SettingsIcon className="h-4 w-4 text-black/50" />
              <p className="text-sm font-normal text-black/50">Settings</p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
