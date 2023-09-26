import type { AppProps } from "next/app";
import "@/styles/globals.scss";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }: AppProps) {
  console.log(pageProps.session);
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
