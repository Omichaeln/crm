import { cn } from "@crm/ui/lib/utils";
import Image from "next/image";

export function Wordmark({ className }: { className?: string }) {
	return (
		<span className={cn("flex shrink-0 select-none items-center", className)}>
			<Image
				src="/ore-and-tar-logo.svg"
				alt="Ore and Tar CRM"
				width={220}
				height={169}
				priority
				className="h-9 w-auto object-contain"
			/>
		</span>
	);
}
