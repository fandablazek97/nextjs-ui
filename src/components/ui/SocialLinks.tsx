import AppLink from "@ui/AppLink";
import { socials } from "@configs/socials";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

type SocialLinksOptions = {
  as?: React.ElementType;
  className?: string;
  [x: string]: any;
};

export default function SocialLinks({
  as: Tag = "div",
  className = "",
  ...rest
}: SocialLinksOptions) {
  // Logic goes here
  return (
    <Tag className={`${className}`} {...rest}>
      <ul className="flex gap-x-6 xl:gap-x-10">
        <li>
          <AppLink
            href={socials.facebook.href}
            isExternal
            aria-label={socials.facebook.aria}
            className="text-xl text-copy outline-none transition-colors duration-150 ease-in-out hover:text-primary focus-visible:ring-2 focus-visible:ring-copy/70"
          >
            <FaFacebookF />
          </AppLink>
        </li>
        <li>
          <AppLink
            href={socials.instagram.href}
            isExternal
            aria-label={socials.instagram.aria}
            className="text-xl text-copy outline-none transition-colors duration-150 ease-in-out hover:text-primary focus-visible:ring-2 focus-visible:ring-copy/70"
          >
            <FaInstagram />
          </AppLink>
        </li>
        <li>
          <AppLink
            href={socials.twitter.href}
            isExternal
            aria-label={socials.twitter.aria}
            className="text-xl text-copy outline-none transition-colors duration-150 ease-in-out hover:text-primary focus-visible:ring-2 focus-visible:ring-copy/70"
          >
            <FaTwitter />
          </AppLink>
        </li>
        <li>
          <AppLink
            href={socials.linkedin.href}
            isExternal
            aria-label={socials.linkedin.aria}
            className="text-xl text-copy outline-none transition-colors duration-150 ease-in-out hover:text-primary focus-visible:ring-2 focus-visible:ring-copy/70"
          >
            <FaLinkedinIn />
          </AppLink>
        </li>
      </ul>
    </Tag>
  );
}
