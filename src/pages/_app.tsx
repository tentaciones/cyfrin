import "@/styles/globals.css";
import type { AppProps } from "next/app";
// eslint-disable-next-line react/display-name
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
