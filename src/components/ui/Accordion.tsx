// DOCS: https://headlessui.com/react/disclosure

import { Disclosure } from "@headlessui/react";
import { HiMinus, HiPlus } from "react-icons/hi2";

type AccordionProps = {
  title: string;
  children: React.ReactNode;
  isDefaultOpen?: boolean;
};

export default function Accordion({
  title = "Lorem ipsum dolor sit amet?",
  children = "Yes! You can purchase a license that you can share with your entire team",
  isDefaultOpen = false,
}: AccordionProps) {
  return (
    <Disclosure defaultOpen={isDefaultOpen}>
      {({ open }) => (
        <div>
          <Disclosure.Button
            className={`flex w-full items-center justify-between py-4 text-left text-base font-medium focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/70 sm:text-lg`}
          >
            <span className={`${open ? "text-primary" : "text-copy-rich"}`}>
              {title}
            </span>
            {open ? (
              <HiMinus className="shrink-0 text-primary" />
            ) : (
              <HiPlus className="shrink-0 text-copy-rich" />
            )}
          </Disclosure.Button>
          <Disclosure.Panel className="pt-2 pb-8">{children}</Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
}
