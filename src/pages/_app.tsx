import "@/styles/globals.css";
import "highlight.js/styles/github-dark.css";
import { AppProps } from "@/types/base";
import { CommonLayout } from "@/components/containers/CommonLayout";
import { SWRConfig } from "swr";

export default function App({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout ?? CommonLayout;

  return (
    <SWRConfig value={{ fallback: pageProps.fallback || {} }}>
      {getLayout(<Component {...pageProps} />, pageProps)}
    </SWRConfig>
  )
}
