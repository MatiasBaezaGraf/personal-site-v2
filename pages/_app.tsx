import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			{" "}
			<Component {...pageProps} />
			{/* particles.js defines a global variable named particlesJS, used in app.js therefore we need to load particles.js before app.js */}
			<Script
				src="/scripts/particles.js"
				onLoad={() => console.log("particles.js script loaded")}
				strategy="beforeInteractive"
			></Script>
			<Script
				src="/scripts/app.js"
				onLoad={() => console.log("app.js script loaded")}
			></Script>
		</>
	);
}
