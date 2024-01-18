"use client"
import clsx from "clsx";
import React, { ReactNode, useState } from "react";
import {ScrollShadow} from "@nextui-org/scroll-shadow";
import EditIcon from "./EditIcon";
import Image from "next/image";
import Sidebar from "./sidebar";
const Layout = ({children, className}:{children: ReactNode, className: string}) => {
  const [collapsed, setSidebarCollapsed] = useState(false);
  return (
    <main
      className={clsx({
        // 👇 use grid layout
        "grid min-h-screen": true,
        // 👇 toggle the width of the sidebar depending on the state
        "grid-cols-sidebar": !collapsed,
        "grid-cols-sidebar-collapsed": collapsed,
        // 👇 transition animation classes
        "transition-[grid-template-columns] duration-300 ease-in-out": true,
      }, className)}
    >
      <Sidebar setSidebarCollapsed={() =>setSidebarCollapsed(prev => !prev)} collapsed={collapsed}/>
      <ScrollShadow hideScrollBar className='px-8 flex flex-col'>{children}</ScrollShadow>
    </main>
  );
};
export default Layout;