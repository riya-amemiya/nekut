import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
export const GetCodeLink = ({
	children,
	path,
}: {
	children: React.ReactNode;
	path?: string;
}) => {
	const router = useRouter();
	if (!path) {
		path = `${router.pathname.replace("chapters", "data")}/SourceCode`;
	}

	return (
		<Link
			className="nx-text-primary-600 nx-underline nx-decoration-from-font [text-underline-position:under]"
			href={path}
			target="_blank"
			rel="noreferrer"
		>
			{children}
		</Link>
	);
};
