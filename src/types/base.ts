import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import { AppProps as NextAppProps } from "next/app";
import { TablerIconsProps } from "@tabler/icons-react";

export interface AppLayout<P = any> {
  (page: ReactElement, pageProps: P): ReactNode;
}

export interface GetLayout {
  getLayout?: AppLayout;
}

export type PageWithLayout<P = {}, IP = P> = NextPage<P, IP> & GetLayout;

export type AppProps = NextAppProps & {
  Component: PageWithLayout;
}

export type NavbarIconComponent = (props: TablerIconsProps) => JSX.Element;

export interface NavbarItem {
  label: ReactNode;
  icon?: NavbarIconComponent;
  href?: string;
  children?: NavbarItem[];
}

export interface MenuItem {
  url: string;
  name: string;
  summary?: string;
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
}
