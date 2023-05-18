import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			{" "}
			<Component {...pageProps} />
			<Script src="/scripts/particles.js"></Script>
			<Script src="/scripts/app.js"></Script>
		</>
	);
}
