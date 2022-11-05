import PreHeading from "@ui/PreHeading";
import Heading from "@ui/Heading";
import Seo from "@ui/Seo";
import Wrapper from "@ui/Wrapper";
import type { NextPage } from "next";
import { HiHome } from "react-icons/hi2";
import Button from "@ui/Button";
import AppLink from "@ui/AppLink";

const Page404: NextPage = () => {
  return (
    <>
      <Seo
        title="Stránka nenalezena"
        description="Stránka, kterou se pokoušíte nalézt již neexistuje, nebo byla přesunuta. Kliknutím na následující tlačítko se dostanete na hlavní stránku webu."
        noIndex={false}
        noFollow={false}
      />
      <div className="flex h-screen w-screen items-center justify-center">
        <Wrapper
          paddedContent="lg"
          className="flex flex-col items-center justify-center"
        >
          <PreHeading align="center" hasMarginBottom>
            404
          </PreHeading>
          <Heading as="h1" size="2xl" align="center" hasMarginBottom>
            Tato stránka neexistuje
          </Heading>
          <p className="max-w-prose text-center text-lg">
            Stránka, kterou se pokoušíte nalézt již neexistuje, nebo byla
            přesunuta. Kliknutím na následující tlačítko se dostanete na hlavní
            stránku webu.
          </p>
          <AppLink href="/" passHref>
            <Button as="a" size="lg" leftIcon={<HiHome />} className="mt-16">
              Hlavní strana
            </Button>
          </AppLink>
        </Wrapper>
      </div>
    </>
  );
};

export default Page404;
