import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			{" "}
			<Component {...pageProps} />
			<Script
				src="/scripts/particles.js"
				onLoad={() => console.log("particles.js script loaded")}
			></Script>
			<Script
				src="/scripts/app.js"
				onLoad={() => console.log("app.js script loaded")}
			></Script>
		</>
	);
}
