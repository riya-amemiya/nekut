import Document, { Head, Html, Main, NextScript } from "next/document";
import { GA_ID } from "../lib/gtag";
class MyDocument extends Document {
	render() {
		return (
			<Html lang={"ja"} dir={"ltr"}>
				<Head>
					{GA_ID && (
						<>
							<script
								async={true}
								src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
							/>
							<script
								// rome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
								dangerouslySetInnerHTML={{
									__html: `
                   window.dataLayer = window.dataLayer || [];
                   function gtag(){dataLayer.push(arguments);}
                   gtag('js', new Date());
                   gtag('config', '${GA_ID}', {
                     page_path: window.location.pathname,
                   });`,
								}}
							/>
						</>
					)}
				</Head>
				<body>
					<Main />

					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
