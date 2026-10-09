export function workspaceLabel(name: string | undefined): string {
	const trimmed = name?.trim();

	if (!trimmed) return "Ore and Tar CRM";

	return /\bcrm$/i.test(trimmed) ? trimmed : `${trimmed} CRM`;
}
