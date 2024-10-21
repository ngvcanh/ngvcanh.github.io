import { NextPage } from "next";

export type PageLayout = (page: JSX.Element) => JSX.Element;

export interface ContainerServerProps {
  params: Promise<Record<string, string>>;
  searchParams: Promise<URLSearchParams>;
}

export type ContainerPage<Props = Record<string, unknown>> = NextPage<Props & ContainerServerProps>;

export type AppPage<Props = Record<string, unknown>> = NextPage<Props & ContainerServerProps> & {
  getLayout?: PageLayout;
};
