import type { AppProps } from "next/app";
import "leaflet/dist/leaflet.css";
import "@/styles/globals.scss";

import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { store } from "@/redux/app/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </Provider>
  );
}
