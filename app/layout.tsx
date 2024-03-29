import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import { poppins } from "@/config/fonts";
import { Providers } from "./providers";
import clsx from "clsx";
import Layout from "@/components/Layout";

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning >
			<head>
			<script type="text/javascript" async={true} src="/googleTagManager.js" nonce=""></script>
			</head>
			<body
				className={clsx({
					"min-h-screen max-h-full bg-background antialiased dark:text-foreground-600": true,
					[poppins.variable]: true,
				})}
			>
				<Providers
					themeProps={{
						attribute: "class",
						defaultTheme: "light"
					}}
					planProps={{
						customer: 'Mykola Semen',
						level: 'Premium',
						price: 80,
						expireDate: new Date('Sun Feb 11 2024 03:11:27 GMT-1000 (Hawaii-Aleutian Standard Time)'),
					}}
				>
					<div className="relative flex flex-col h-screen">
						<Layout className="w-full mx-auto flex-grow relative h-full bg-foreground-50">{children}</Layout>
					</div>
				</Providers>
			</body>
		</html>
	);
}
