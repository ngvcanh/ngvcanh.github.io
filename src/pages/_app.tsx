import "@/styles/globals.css";
import { AppProps } from "@/types/base";
import { CommonLayout } from "@/components/containers/CommonLayout";

export default function App({ Component, pageProps }: AppProps) {
  console.log(pageProps);
  const getLayout = Component.getLayout ?? CommonLayout;
  return getLayout(<Component {...pageProps} />, pageProps);
}
