import { NextSeo } from "next-seo";
import { config } from "@configs/site-config";

type SeoProps = {
  title: string;
  description: string;
  noIndex?: boolean;
  noFollow?: boolean;
};

export default function Seo({
  title,
  description,
  noIndex = false,
  noFollow = false,
}: SeoProps) {
  return (
    <NextSeo
      title={title}
      titleTemplate={config.seo.titleTemplate}
      description={description}
      openGraph={{ title, description }}
      noindex={noIndex}
      nofollow={noFollow}
    />
  );
}
