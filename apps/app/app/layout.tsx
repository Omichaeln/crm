import "@crm/ui/globals.css";
import { Toaster } from "@crm/ui/components/sonner";
import { TooltipProvider } from "@crm/ui/components/tooltip";
import { cn } from "@crm/ui/lib/utils";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { LocalDateTimeHydrator } from "@/components/local-date-time";
import { PwaRegister } from "@/components/pwa-register";
import { ThemeProvider } from "@/components/theme-provider";
import { TRPCReactProvider } from "@/lib/trpc/client";

const fontSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const fontMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: {
		default: "Ore and Tar CRM",
		template: "%s · Ore and Tar CRM",
	},
	description:
		"Ore and Tar CRM — an agentic customer relationship system for teams that want every record current and every follow-up accounted for.",
	icons: {
		icon: [
			{ url: "/favicon.jpg", type: "image/jpeg", sizes: "1000x1000" },
			{ url: "/ore-and-tar-logo.svg", type: "image/svg+xml" },
			{ url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
		],
		apple: "/apple-touch-icon.png",
	},
	manifest: "/site.webmanifest",
	appleWebApp: {
		capable: true,
		title: "Ore and Tar CRM",
		statusBarStyle: "default",
	},
	formatDetection: { telephone: false },
};

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	viewportFit: "cover",
	themeColor: "#ffffff",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
			className={cn(fontSans.variable, fontMono.variable, "h-full antialiased")}
		>
			<body className="flex min-h-full flex-col font-sans">
				<NuqsAdapter>
					<TRPCReactProvider>
						<ThemeProvider>
							<TooltipProvider>{children}</TooltipProvider>
							<Toaster richColors />
						</ThemeProvider>
					</TRPCReactProvider>
				</NuqsAdapter>
				<PwaRegister />
				<LocalDateTimeHydrator />
			</body>
		</html>
	);
}
