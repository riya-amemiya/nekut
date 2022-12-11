import { useRouter } from 'next/router';
import Script from 'next/script';
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs';
import { IconContext } from 'react-icons';
import { FiGithub, FiLink } from 'react-icons/fi';
import { SiTwitter, SiZenn } from 'react-icons/si';
const siteMetadata = {
    title: process.env.NEXT_PUBLIC_SITE_TITLE,
    siteURL: process.env.NEXT_PUBLIC_SITE_URL.slice(0, -1),
    repository: 'https://github.com/riya-amemiya/nekut',
    author: {
        zenn: 'https://zenn.dev/riya_amemiya',
        github: 'https://github.com/riya-amemiya',
        twitter: 'https://twitter.com/riya31377928',
        blog: 'https://amemiya-riya-blog.oshaburikitchin.com/',
    },
};
const config: DocsThemeConfig = {
    logo: <span>{siteMetadata.title}</span>,
    chat: {
        link: process.env.NEXT_PUBLIC_DISCORD_URL,
    },
    docsRepositoryBase: siteMetadata.repository,
    footer: {
        text: () => {
            return (
                <>
                    <div
                        style={{
                            display: 'flex',
                            width: '100%',
                            justifyContent: 'center',
                        }}>
                        {[
                            {
                                link: siteMetadata.author.twitter,
                                icon: SiTwitter,
                            },
                            {
                                link: siteMetadata.author.github,
                                icon: FiGithub,
                            },
                            {
                                link: siteMetadata.author.zenn,
                                icon: SiZenn,
                            },
                            {
                                link: siteMetadata.author.blog,
                                icon: FiLink,
                            },
                        ].map((n) => {
                            return (
                                <div
                                    key={n.link}
                                    style={{
                                        margin: '5px',
                                    }}>
                                    <IconContext.Provider
                                        value={{ size: '25' }}>
                                        <a key={n.link} href={n.link}>
                                            {n.icon({})}
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
        const { route } = useRouter();
        if (route !== '/') {
            return {
                titleTemplate: `%s - ${siteMetadata.title}`,
            };
        } else if (route === '/') {
            return {
                title: siteMetadata.title,
            };
        }
    },
    head: () => {
        const { asPath } = useRouter();
        const { frontMatter } = useConfig();
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
                <link
                    rel="manifest"
                    href="/favicons/site.webmanifest"
                />
                <link
                    rel="mask-icon"
                    href="/favicons/safari-pinned-tab.svg"
                    color="#5bbad5"
                />
                <meta
                    name="msapplication-TileColor"
                    content="#da532c"
                />
                <meta name="theme-color" content="#ffffff" />
                <meta
                    property="og:url"
                    content={`${siteMetadata.siteURL}${asPath}`}
                />
                <meta
                    property="og:title"
                    content={siteMetadata.title || 'Nextra'}
                />
                <meta
                    property="og:image"
                    content={`${siteMetadata.siteURL}/img/logo_wide.png`}
                />
                <meta property="og:type" content="website" />
                <meta
                    property="twitter:title"
                    content={siteMetadata.title || 'Nextra'}
                />
                <meta
                    property="twitter:card"
                    content="summary_large_image"
                />
                <meta
                    property="twitter:url"
                    content={`${siteMetadata.siteURL}${asPath}`}
                />
                <meta
                    property="twitter:site"
                    content={'@riya31377928'}
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta name="robots" content="noindex" />
                <Script
                    async
                    src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
                />
                <Script>
                    {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');`}
                </Script>
            </>
        );
    },
};
export default config;
