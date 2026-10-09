import { GitHubStarButton } from "./github-star-button";
import { SetupPromptButton } from "./setup-prompt-button";

export function Hero() {
	return (
		<section className="relative flex w-full shrink-0 flex-col items-center px-6 pt-20 pb-10 md:pt-30">
			<div className="relative grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:gap-20">
				<div className="flex flex-col items-start gap-7">
					<p className="font-mono text-xs/4 text-muted-foreground tracking-[0.24em]">
						ORE AND TAR / CRM SYSTEM
					</p>
					<h1 className="max-w-[760px] text-balance font-semibold text-5xl/[52px] tracking-tight md:text-[72px]/[76px]">
						Customer context, kept current.
					</h1>

					<p className="max-w-[640px] text-pretty text-muted-foreground text-lg/[28px] md:text-xl/[30px]">
						Ore and Tar CRM gives every team one durable place for customer
						context, active pipeline, and the agent work that keeps both moving.
					</p>

					<div className="flex flex-wrap items-center gap-3 pt-3">
						<SetupPromptButton location="hero" />
						<GitHubStarButton location="hero" />
					</div>
				</div>

				<div className="relative flex min-h-[300px] flex-col justify-between overflow-hidden rounded-xl border border-border bg-card p-7 shadow-2xl shadow-black/10 md:min-h-[360px] md:p-9">
					<div className="absolute -right-16 -top-20 size-56 rounded-full border border-border/70" />
					<div className="absolute -right-8 -top-12 size-40 rounded-full border border-border/50" />
					<div className="relative flex items-center justify-between border-border border-b pb-5">
						<div className="flex items-center gap-3">
							<span className="flex size-9 items-center justify-center rounded-md bg-foreground text-background">
								<span className="font-semibold text-sm">OT</span>
							</span>
							<span className="font-medium text-sm">Ore and Tar CRM</span>
						</div>
						<span className="font-mono text-[10px] text-muted-foreground tracking-widest">
							LIVE SYSTEM
						</span>
					</div>
					<div className="relative flex flex-col gap-5 py-8">
						<p className="max-w-[13ch] text-balance font-medium text-3xl/[36px] tracking-tight">
							Every record tells the whole story.
						</p>
						<div className="grid grid-cols-2 gap-3 text-[13px]/[18px]">
							{["Companies", "Contacts", "Deals", "Agent queue"].map(
								(label) => (
									<div
										key={label}
										className="flex items-center gap-2 rounded-md border border-border px-3 py-2.5"
									>
										<span className="size-1.5 rounded-full bg-ring" />
										{label}
									</div>
								),
							)}
						</div>
					</div>
					<p className="relative border-border border-t pt-4 font-mono text-[11px]/4 text-muted-foreground tracking-wider">
						CONTEXT / PIPELINE / FOLLOW-THROUGH
					</p>
				</div>
			</div>
		</section>
	);
}
