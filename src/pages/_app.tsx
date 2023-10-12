import type { AppProps } from "next/app";
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
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
