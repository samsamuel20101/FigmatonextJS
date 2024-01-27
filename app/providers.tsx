"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from 'next/navigation'
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { createContext } from 'react'
import SidebarProvider from "./sidebarProvider";
import CartProvider from "./cartProvider";
import PlanProvider, { currentPlanType } from "./planProvider";

export const ThemeContext = createContext({})

export interface ProvidersProps {
	children: React.ReactNode;
	themeProps?: ThemeProviderProps;
	planProps?: currentPlanType
}

export function Providers({ children, themeProps, planProps }: ProvidersProps) {
	const router = useRouter();

	return (
		<NextUIProvider navigate={router.push}>
			<NextThemesProvider {...themeProps}>
				<SidebarProvider>
					<CartProvider>
						<PlanProvider props={planProps}>
							{children}
						</PlanProvider>
					</CartProvider>
				</SidebarProvider>
			</NextThemesProvider>
		</NextUIProvider>
	);
}

