"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from 'next/navigation'
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { createContext } from 'react'
import SidebarProvider from "./sidebarProvider";
import CartProvider from "./cartProvider";

export const ThemeContext = createContext({})

export interface ProvidersProps {
	children: React.ReactNode;
	themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

	return (
		<NextUIProvider navigate={router.push}>
			<NextThemesProvider {...themeProps}>
				<SidebarProvider>
					<CartProvider>
						{children}
					</CartProvider>
				</SidebarProvider>
			</NextThemesProvider>
		</NextUIProvider>
	);
}

