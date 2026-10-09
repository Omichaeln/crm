import type * as React from "react";

const Logo = (props: React.SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={512}
		height={512}
		viewBox="0 0 512 512"
		fill="none"
		role="img"
		aria-label="Ore and Tar logo"
		{...props}
	>
		<image
			href="/favicon.jpg"
			x="0"
			y="0"
			width="512"
			height="512"
			preserveAspectRatio="xMidYMid slice"
		/>
	</svg>
);

export default Logo;
