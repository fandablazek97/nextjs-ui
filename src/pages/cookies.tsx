import ContentFormater from "@ui/ContentFormater";
import Seo from "@ui/Seo";
import type { NextPage } from "next";
import Wrapper from "@ui/Wrapper";
import Heading from "@ui/Heading";
import CookiesPolicy from "@components/cookies/CookiesPolicy";
import { config } from "@configs/site-config";

const CookiesPage: NextPage = () => {
  return (
    <>
      <Seo
        title="Page title"
        description="Page description"
        noIndex={true}
        noFollow={true}
      />
      {/* Page Content... */}
      <Wrapper paddedContent="lg">
        <Heading as="h1" size="2xl" align="center" className="mx-auto">
          Zpracování souborů cookies
        </Heading>
      </Wrapper>
      <ContentFormater>
        <CookiesPolicy
          domain={config.seo.url}
          responsibleSubject={config.legal.company.name}
          subjectAdress={config.legal.company.adress}
          subjectIdentificationNumber={config.legal.company.ic}
          validConsentPeriod={config.legal.cookies.validConsentPeriod}
          preferencesCookies={config.legal.cookies.preferencesCookies}
          statisticCookies={config.legal.cookies.statisticCookies}
          marketingCookies={config.legal.cookies.marketingCookies}
          thirdPartyCookies={config.legal.cookies.thirdPartyCookies}
          lastDocumentUpdate="1.11.2022"
        />
      </ContentFormater>
    </>
  );
};

export default CookiesPage;
