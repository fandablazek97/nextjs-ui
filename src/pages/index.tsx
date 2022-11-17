import ContactForm from "@components/contact/ContactForm";
import Accordion from "@ui/Accordion";
import Alert from "@ui/Alert";
import Badge from "@ui/Badge";
import Button from "@ui/Button";
import FormCombobox from "@ui/FormCombobox";
import Heading from "@ui/Heading";
import Seo from "@ui/Seo";
import SocialLinks from "@ui/SocialLinks";
import Spinner from "@ui/Spinner";
import Wrapper from "@ui/Wrapper";
import type { NextPage } from "next";
import Avatar from "@ui/Avatar";

// ToDo
// ----------------------

// 01 - General
// Cookie consent podle gdpr 2022 (context api + cookies ??) 8h.
// Navbar - doladit - 1 hod
// Button - dodělat hover efekty přes props? - 3h
// Button - ripple effekt? ??
// Dodělat na komponenty focus-visible (třeba anchor) - 1h

// 02 - Pages
// Page: Index - Ukázka frameworku - 3h
// Page: Theme - Zobrazené komponenty pro snadnou úpravu šablony - 2h

// 03 - Components
// Components: Footer
// Components: Social Links and Icons - 1h
// Components: Avatar - 2h
// Components: Anchor (update) - 1.5h
// Components: Progress bar - 2h
// Components: Tooltip - 2h
// Components: Quote - 1h
// Components: Floating button (Fixed CTA - right bottom corner)
// Components Forms: Type Date - 1h
// Components Forms: Type Number - 2h
// Components Forms: File - 1h
// Components: Full contact form - 2h

// 04 - After some time
// doladit a začistit - 4h
// Až bude vše implementované, odladit rychlost, aby v page speed bylo skóre 100 / 100
// -> Možná přesun na preact/compact? (Vyzkoušet kvůli kompatibilitě)

const Home: NextPage = () => {
  return (
    <>
      <Seo
        title="Ui framework"
        description="Nextjs ui framework v2 made with typescript"
        noIndex={false}
        noFollow={false}
      />
      {/* Hero section */}
      <Wrapper paddedContent="lg" size="sm">
        <Heading as={"h1"} size="2xl">
          Hlavní nadpis
        </Heading>
      </Wrapper>

      <Wrapper size="sm" paddedContent="lg" className="space-y-5">
        <SocialLinks />
        <ContactForm />
        <FormCombobox
          name="combobox"
          label="label"
          radius="full"
          helperText="Lorem ipsum dolor sit amet"
          options={[
            "Fanda",
            "Libor",
            "Marie",
            "Kuba",
            "Vláďa",
            "Dominik",
            "Adam",
            "Radek",
          ]}
          variant="outlined"
        />
        <Alert
          status="success"
          title="Lorem ipsum dolor sit amet"
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab quos deserunt cum temporibus adipisci perferendis, mollitia, obcaecati fugiat."
        />
        <Alert
          status="error"
          title="Lorem ipsum dolor sit amet"
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab quos deserunt cum temporibus adipisci perferendis, mollitia, obcaecati fugiat."
        />
        <Alert
          status="warning"
          title="Lorem ipsum dolor sit amet"
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab quos deserunt cum temporibus adipisci perferendis, mollitia, obcaecati fugiat."
        />
        <Alert
          status="info"
          title="Lorem ipsum dolor sit amet"
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab quos deserunt cum temporibus adipisci perferendis, mollitia, obcaecati fugiat."
        />
        <div className="flex flex-wrap gap-5">
          <Badge hasDot>Badge</Badge>
          <Badge hasDot>Badge</Badge>
          <Badge hasDot>Badge</Badge>
          <Badge hasDot>Badge</Badge>
          <Badge hasDot>Badge</Badge>
        </div>
        <div className="flex flex-wrap gap-5">
          <Button>Button</Button>
          <Button>Button</Button>
          <Button>Button</Button>
          <Button>Button</Button>
          <Button>Button</Button>
          <Button>Button</Button>
        </div>
        <div className="flex flex-wrap gap-5">
          <Spinner />
          <Spinner />
          <Spinner />
          <Spinner />
          <Spinner />
          <Spinner />
        </div>
        <div className="divide-y-copy-rich/15 divide-y">
          <Accordion title="Lorem ipsum dolor sit amet?">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab quos
            deserunt cum temporibus adipisci perferendis, mollitia, obcaecati
            fugiat, odit at laudantium autem sequi eos cumque labore amet itaque
            rerum? Harum delectus soluta optio, sequi veniam, doloribus ducimus,
            animi accusantium deserunt molestias vero ex. Quia temporibus
            possimus nulla asperiores. Earum, eligendi delectus officiis, aut
            expedita consectetur in iusto deserunt minus maiores nam accusamus
            quos dolorem nihil nesciunt. Id sit consequatur voluptatum obcaecati
            error earum voluptatibus molestias pariatur, quis placeat
            laboriosam? Corporis corrupti error dolores totam, tenetur
            laudantium eveniet fugiat consequuntur ipsa quisquam perspiciatis.
            Repellat consequatur animi iusto sapiente beatae molestiae
            assumenda?
          </Accordion>
          <Accordion title="Lorem ipsum dolor sit amet?">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab quos
            deserunt cum temporibus adipisci perferendis, mollitia, obcaecati
            fugiat, odit at laudantium autem sequi eos cumque labore amet itaque
            rerum? Harum delectus soluta optio, sequi veniam, doloribus ducimus,
            animi accusantium deserunt molestias vero ex. Quia temporibus
            possimus nulla asperiores. Earum, eligendi delectus officiis, aut
            expedita consectetur in iusto deserunt minus maiores nam accusamus
            quos dolorem nihil nesciunt. Id sit consequatur voluptatum obcaecati
            error earum voluptatibus molestias pariatur, quis placeat
            laboriosam? Corporis corrupti error dolores totam, tenetur
            laudantium eveniet fugiat consequuntur ipsa quisquam perspiciatis.
            Repellat consequatur animi iusto sapiente beatae molestiae
            assumenda?
          </Accordion>
          <Accordion title="Lorem ipsum dolor sit amet?">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab quos
            deserunt cum temporibus adipisci perferendis, mollitia, obcaecati
            fugiat, odit at laudantium autem sequi eos cumque labore amet itaque
            rerum? Harum delectus soluta optio, sequi veniam, doloribus ducimus,
            animi accusantium deserunt molestias vero ex. Quia temporibus
            possimus nulla asperiores. Earum, eligendi delectus officiis, aut
            expedita consectetur in iusto deserunt minus maiores nam accusamus
            quos dolorem nihil nesciunt. Id sit consequatur voluptatum obcaecati
            error earum voluptatibus molestias pariatur, quis placeat
            laboriosam? Corporis corrupti error dolores totam, tenetur
            laudantium eveniet fugiat consequuntur ipsa quisquam perspiciatis.
            Repellat consequatur animi iusto sapiente beatae molestiae
            assumenda?
          </Accordion>
          <Accordion title="Lorem ipsum dolor sit amet?">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab quos
            deserunt cum temporibus adipisci perferendis, mollitia, obcaecati
            fugiat, odit at laudantium autem sequi eos cumque labore amet itaque
            rerum? Harum delectus soluta optio, sequi veniam, doloribus ducimus,
            animi accusantium deserunt molestias vero ex. Quia temporibus
            possimus nulla asperiores. Earum, eligendi delectus officiis, aut
            expedita consectetur in iusto deserunt minus maiores nam accusamus
            quos dolorem nihil nesciunt. Id sit consequatur voluptatum obcaecati
            error earum voluptatibus molestias pariatur, quis placeat
            laboriosam? Corporis corrupti error dolores totam, tenetur
            laudantium eveniet fugiat consequuntur ipsa quisquam perspiciatis.
            Repellat consequatur animi iusto sapiente beatae molestiae
            assumenda?
          </Accordion>
          <Accordion title="Lorem ipsum dolor sit amet?">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab quos
            deserunt cum temporibus adipisci perferendis, mollitia, obcaecati
            fugiat, odit at laudantium autem sequi eos cumque labore amet itaque
            rerum? Harum delectus soluta optio, sequi veniam, doloribus ducimus,
            animi accusantium deserunt molestias vero ex. Quia temporibus
            possimus nulla asperiores. Earum, eligendi delectus officiis, aut
            expedita consectetur in iusto deserunt minus maiores nam accusamus
            quos dolorem nihil nesciunt. Id sit consequatur voluptatum obcaecati
            error earum voluptatibus molestias pariatur, quis placeat
            laboriosam? Corporis corrupti error dolores totam, tenetur
            laudantium eveniet fugiat consequuntur ipsa quisquam perspiciatis.
            Repellat consequatur animi iusto sapiente beatae molestiae
            assumenda?
          </Accordion>
        </div>
        <Avatar name="First Middle Last" size="xs" />
        <Avatar name="First Middle Last" size="sm" />
        <Avatar name="First Middle Last" size="md" />
        <Avatar name="First Middle Last" size="lg" />
        <Avatar name="First Middle Last" size="xl" />
        <Avatar name="First Middle Last" size="2xl" />
      </Wrapper>
    </>
  );
};

export default Home;
