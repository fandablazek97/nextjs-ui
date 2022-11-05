import ContactForm from "@components/contact/ContactForm";
import Seo from "@ui/Seo";
import Wrapper from "@ui/Wrapper";
import type { NextPage } from "next";

const ContactPage: NextPage = () => {
  return (
    <>
      <Seo
        title="Page title"
        description="Page description"
        noIndex={false}
        noFollow={false}
      />
      {/* Page Content... */}
      <Wrapper paddedContent="lg">
        <ContactForm />
      </Wrapper>
    </>
  );
};

export default ContactPage;
