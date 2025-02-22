"use client";

import * as React from "react";

import { create } from "zustand";

export interface TConfig {
  id: string;
  name: string;
  email: string;
  age: number;
  gender: string;
  medication: string;
  emergency: string;
  habits: string;
  important_notes: string;
  latitude: number;
  longitude: number;
}

interface TCreateStoreParams {
  config: TConfig;
}

type TCreateStore = TCreateStoreParams & {
  setConfig: (config: TConfig) => void;
};

function createStore({ config }: TCreateStoreParams) {
  return create<TCreateStore>()((set) => ({
    config,
    setConfig: (config) => set({ config }),
  }));
}

const ConfigContext = React.createContext<ReturnType<
  typeof createStore
> | null>(null);

export function useConfig() {
  if (!ConfigContext) {
    throw new Error("useConfig must be used within a ConfigProvider");
  }

  return React.useContext(ConfigContext)!;
}

type TConfigProviderProps = React.PropsWithChildren<TCreateStoreParams>;

export function ConfigProvider({ config, children }: TConfigProviderProps) {
  const [store] = React.useState(() => createStore({ config }));

  return (
    <ConfigContext.Provider value={store}>{children}</ConfigContext.Provider>
  );
}
