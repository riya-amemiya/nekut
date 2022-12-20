import { NextSeoProps } from "next-seo";
import { useRouter } from "next/router";
import { DocsThemeConfig } from "nextra-theme-docs";
import { IconContext } from "react-icons";
import { FiGithub, FiLink } from "react-icons/fi";
import { SiDiscord, SiSlack, SiTwitter, SiZenn } from "react-icons/si";
export const siteMetadata = {
	title: process.env.NEXT_PUBLIC_SITE_TITLE,
	siteURL: process.env.NEXT_PUBLIC_SITE_URL.slice(0, -1),
	repository: "https://github.com/riya-amemiya/nekut",
	author: {
		zenn: "https://zenn.dev/riya_amemiya",
		github: "https://github.com/riya-amemiya",
		twitter: "https://twitter.com/riya31377928",
		blog: "https://amemiya-riya-blog.oshaburikitchin.com/",
	},
};
const chatURLParce = new URL(process.env.NEXT_PUBLIC_JOIN_COMMUNITY_URL);
let chatIcon = <SiSlack />;
if (chatURLParce.hostname.indexOf("discord") !== -1) {
	chatIcon = <SiDiscord />;
}
const config: DocsThemeConfig = {
	logo: <span>{siteMetadata.title}</span>,
	chat: {
		icon: (
			<IconContext.Provider value={{ size: "25" }}>
				{chatIcon}
			</IconContext.Provider>
		),
		link: process.env.NEXT_PUBLIC_JOIN_COMMUNITY_URL,
	},
	docsRepositoryBase: `${siteMetadata.repository}/blob/beta/`,
	footer: {
		text: () => {
			return (
				<>
					<div
						style={{
							display: "flex",
							width: "100%",
							justifyContent: "center",
						}}
					>
						{[
							{
								link: siteMetadata.author.twitter,
								icon: <SiTwitter />,
							},
							{
								link: siteMetadata.author.github,
								icon: <FiGithub />,
							},
							{
								link: siteMetadata.author.zenn,
								icon: <SiZenn />,
							},
							{
								link: siteMetadata.author.blog,
								icon: <FiLink />,
							},
						].map((n) => {
							return (
								<div
									key={n.link}
									style={{
										margin: "5px",
									}}
								>
									<IconContext.Provider value={{ size: "25" }}>
										<a
											key={n.link}
											href={n.link}
											target="_blank"
											rel="noopener noreferrer"
										>
											{n.icon}
										</a>
									</IconContext.Provider>
								</div>
							);
						})}
					</div>
				</>
			);
		},
	},
	useNextSeoProps() {
		const { route, asPath } = useRouter();
		const openGraph: NextSeoProps["openGraph"] = {
			url: `${siteMetadata.siteURL}${asPath}`,
			title: siteMetadata.title || "Nextra",
			images: [
				{
					url: `${siteMetadata.siteURL}/img/logo_wide.jpg`,
				},
			],
			type: "website",
		};
		const twitter: NextSeoProps["twitter"] = {
			site: "@riya31377928",
			cardType: "summary_large_image",
		};
		const canonical = `${siteMetadata.siteURL}${asPath}`;
		if (route !== "/") {
			return {
				openGraph,
				twitter,
				canonical,
				titleTemplate: `%s - ${siteMetadata.title}`,
			};
		} else if (route === "/") {
			return {
				openGraph,
				twitter,
				canonical,
				title: siteMetadata.title,
			};
		}
	},
	head: () => {
		return (
			<>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/favicons/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicons/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicons/favicon-16x16.png"
				/>
				<link rel="manifest" href="/favicons/site.webmanifest" />
				<link
					rel="mask-icon"
					href="/favicons/safari-pinned-tab.svg"
					color="#5bbad5"
				/>
				<meta name="msapplication-TileColor" content="#da532c" />
				<meta name="theme-color" content="#ffffff" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta
					name="google-site-verification"
					content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION}
				/>
			</>
		);
	},
};
export default config;
