import "@/styles/globals.css";
import "highlight.js/styles/github-dark.css";
import { AppProps } from "@/types/base";
import { CommonLayout } from "@/components/containers/CommonLayout";
import { SWRConfig } from "swr";
import { Head } from "@/components/layout/Head";

export default function App({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout ?? CommonLayout;

  return (
    <SWRConfig value={{ fallback: pageProps.fallback || {} }}>
      <Head metadata={pageProps.metadata} />
      {getLayout(<Component {...pageProps} />, pageProps)}
    </SWRConfig>
  )
}
