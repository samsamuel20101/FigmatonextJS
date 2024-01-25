"use client"
import clsx from "clsx";
import React, { ReactNode, useContext, useState } from "react";
import {ScrollShadow} from "@nextui-org/scroll-shadow";
import Sidebar from "./sidebar";
import { SidebarContext } from "@/app/sidebarProvider";
const Layout = ({children, className}:{children: ReactNode, className: string}) => {
	const [sidebarStatus, setSidebarStatus] = useContext(SidebarContext)
  return (
    <main
      className={clsx({
        // 👇 use grid layout
        "grid min-h-screen": true,
        // 👇 toggle the width of the sidebar depending on the state
        "grid-cols-sidebar": !sidebarStatus,
        "grid-cols-sidebar-collapsed": sidebarStatus,
        // 👇 transition animation classes
        "transition-[grid-template-columns] duration-300 ease-in-out": true,
      }, className)}
    >
      <Sidebar />
      <ScrollShadow hideScrollBar className=' flex flex-col h-full bg-foreground-50'>{children}</ScrollShadow>
    </main>
  );
};
export default Layout;