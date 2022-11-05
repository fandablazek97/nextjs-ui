import FooterAuthorSignature from "./FooterAuthorSignature";
import Wrapper from "@ui/Wrapper";
import { config } from "@configs/site-config";

export default function Footer() {
  return (
    <footer className="border-t border-solid border-body-100">
      <Wrapper size="lg" className="flex items-center justify-between py-12">
        <span className="block">
          Copyright © {new Date().getFullYear()} {config.seo.shortUrl}
        </span>
        <FooterAuthorSignature />
      </Wrapper>
    </footer>
  );
}
