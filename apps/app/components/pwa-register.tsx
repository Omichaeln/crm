"use client";

import { useEffect } from "react";

export function PwaRegister() {
	useEffect(() => {
		if (!("serviceWorker" in navigator)) return;

		navigator.serviceWorker.register("/sw.js", { scope: "/" }).catch(() => {
			// PWA support is progressive; a registration failure must not affect CRM use.
		});
	}, []);

	return null;
}
