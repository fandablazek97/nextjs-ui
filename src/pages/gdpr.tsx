import GdprPolicy from "@components/gdpr/GdprPolicy";
import ContentFormater from "@ui/ContentFormater";
import Seo from "@ui/Seo";
import type { NextPage } from "next";
import Wrapper from "@ui/Wrapper";
import Heading from "@ui/Heading";
import { config } from "@configs/site-config";

const GdprPage: NextPage = () => {
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
          Zpracování osobních údajů
        </Heading>
      </Wrapper>
      <ContentFormater>
        <GdprPolicy
          responsibleSubject={config.legal.company.name}
          subjectAdress={config.legal.company.adress}
          subjectIdentificationNumber={config.legal.company.ic}
          subjectEmail={config.legal.company.email}
          subjectPhone={config.legal.company.phone}
          hostingProvider={config.legal.providers.hostingProvider}
          emailProvider={config.legal.providers.emailProvider}
          websiteAdministrator={config.legal.providers.websiteAdministrator}
          takesEffectDate={config.legal.websiteLaunchDate}
          lastDocumentUpdate="1.11. 2022"
        />
      </ContentFormater>
    </>
  );
};

export default GdprPage;
