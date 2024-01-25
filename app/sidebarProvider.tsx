"use client";

import React, { createContext, useState } from "react";

const useSidebarState = () =>
  useState<boolean>(false);

export const SidebarContext = createContext<ReturnType<
  typeof useSidebarState
> | null | any>(null);


const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
  const [sidebarStatus, setSidebarStatus] = useSidebarState();

  return (
    <SidebarContext.Provider value={[sidebarStatus, setSidebarStatus]}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;