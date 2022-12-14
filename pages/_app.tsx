import type { AppProps } from "next/app";

import { usePageView } from "../hooks/usePageView";
const MyApp = ({ Component, pageProps }: AppProps) => {
	// Google Analytics の PV をカウントするイベント
	usePageView();
	return (
		<>
			<Component {...pageProps} />;
		</>
	);
};

export default MyApp;
