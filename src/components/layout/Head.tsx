import { FC } from "react";
import NextHead from "next/head";

export interface HeadProps {
  metadata?: Record<string, string>;
}

export const Head: FC<HeadProps> = (props) => {
  const { metadata = {} } = props;

  return (
    <NextHead>
      <meta charSet="utf-8" />
      <meta httpEquiv="Content-type" content="text/html;charset=UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta httpEquiv="Content-type" content="text/html; charset=utf-8" />
      <meta name="robots" content="index, follow, noodp, noydir" />
      <meta httpEquiv="Content-Language" content="vi" />
      <meta name="copyright" content="Copyright © 2024 by ngvcanh" />
      <meta name="distribution" content="Global" />
      <meta name="REVISIT-AFTER" content="1 DAYS" />
      <meta name="RATING" content="GENERAL" />
      <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1.0, user-scalable=no" />
      <title>{metadata?.title}</title>
      <meta name="keywords" content={metadata.keywords} />
      <meta name="description" content={metadata.description} />
      <meta property="og:title" name="title" content={metadata?.title} />
      <meta property="og:description" name="description" content={metadata?.description} />
      <meta property="og:url" content={`${metadata?.asPath}`} />
      <meta property="og:image" content={metadata.image} />
      {Array.isArray(metadata.properties) ? (
        metadata.properties.map((p, index) => (
          p ? (
            <meta key={index} property={p.property} name={p.name} content={p.content} />
          ) : null
        ))
      ) : null}
      {Array.isArray(metadata.links) ? (
        metadata.links.map((l, index) => (
          l ? (
            <link rel={l.rel} href={l.href} key={index} />
          ) : null
        ))
      ) : null}
      {Array.isArray(metadata.scripts) ? (
        metadata.scripts.map((s, index) => (
          s ? (
            <script
              key={index}
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: s }}
            />
          ) : null
        ))
      ) : null}
    </NextHead>
  );
};
