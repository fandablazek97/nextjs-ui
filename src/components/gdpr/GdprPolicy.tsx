import Link from "next/link";

type GdprPolicyProps = {
  responsibleSubject: string;
  subjectAdress: string;
  subjectIdentificationNumber: string;
  subjectEmail: string;
  subjectPhone: string;
  hostingProvider: string;
  emailProvider?: string;
  websiteAdministrator?: string;
  otherProcessorOfGdpr?: string | null;
  takesEffectDate: string;
  lastDocumentUpdate?: string;
};

export default function GdprPolicy({
  responsibleSubject = "spolecnost s.r.o",
  subjectAdress = "Ulice 123, 123 456 Město",
  subjectIdentificationNumber = "01234567",
  subjectEmail = "info@domena.cz",
  subjectPhone = "+420 123 456 789",
  hostingProvider = "Wedos",
  emailProvider = "Emailjs",
  websiteAdministrator = "Reveal",
  otherProcessorOfGdpr = null,
  takesEffectDate = "1. 1. 2023",
  lastDocumentUpdate = "1.11. 2022",
}: GdprPolicyProps) {
  return (
    <section id="gdpr">
      <p>
        <strong className="text-xl leading-loose">
          Ochranu osobních údajů nebereme na lehkou váhu. V souladu s nařízením
          Evropského Parlamentu a Rady (EU) 2016/679 o ochraně fyzických osob v
          souvislosti se zpracováním osobních údajů a o volném pohybu těchto
          údajů (dále také „GDPR“) a o zrušení směrnice 95/46/ES (obecné
          nařízení o ochraně osobních údajů) předkládáme následující prohlášení.
        </strong>
      </p>

      <h2 className="pt-20">Základní informace</h2>
      <h3>Správce osobních údajů</h3>
      <p>
        {responsibleSubject}, {subjectAdress}, IČ: {subjectIdentificationNumber}{" "}
        <br />
        (dále jen jako „Správce“)
      </p>

      <h4>Kontaktní údaje správce</h4>
      <ul>
        <li>E-mail: {subjectEmail}</li>
        <li>Telefon: {subjectPhone}</li>
        <li>Adresa: {subjectAdress}</li>
      </ul>

      <h3>Zpracovatelé osobních údajů</h3>
      <ul>
        <li>{hostingProvider}</li>
        <li>{emailProvider}</li>
        <li>{websiteAdministrator}</li>
        {otherProcessorOfGdpr !== null && <li>{otherProcessorOfGdpr}</li>}
      </ul>

      <p>
        <strong>
          Správce a zpracovatelé jsou povinni zajistit veškeré úsilí k tomu, aby
          bylo s osobními daty nakládáno v souladu se zákonem zákona č. 110/2019
          Sb.
        </strong>
      </p>

      <h2>Zdroj osobních údajů</h2>
      <p>
        Osobní údaje jsou získány na základě vzájemné komunikace, uzavřených
        smluv, či z vyplněných formulářů a pohybu po webových stránkách. Další
        osobní údaje pochází z veřejně dostupných zdrojů (rejstříků, evidencí,
        atd.).
      </p>

      <h2>Seznam osobních údajů</h2>
      <h3>Zpracováváme následující osobní údaje:</h3>
      <ul>
        <li>Jméno a příjmení, E-mail, Telefon, Adresa</li>
        <li>Historii vzájemné komunikace</li>
      </ul>

      <h3>Osobní údaje z vyplněných formulářů z webových stránek:</h3>
      <ul>
        <li>Jméno a příjmení, E-mail, Telefon, Adresa</li>
      </ul>

      <h3>
        Pro zlepšení našich služeb využíváme možnosti uložení cookies do vašeho
        prohlížeče.
      </h3>
      <p>
        Pro více informací o cookies si přečtěte naše{" "}
        <Link href="/cookies">zásady používání cookies.</Link>
      </p>

      <h2>Účel zpracování osobních údajů</h2>
      <ul>
        <li>Naplnění závazků mezi správcem a subjektem údajů</li>
        <li>PR a Marketingové účely</li>
      </ul>

      <h2>Doba zpracování</h2>
      <p>
        Osobní údaje budou zpracovány po dobu nezbytně nutnou k daným účelům. Ne
        však po dobu delší než 30 let. Po uplynutí této doby budou osobní údaje
        odstraněny.
      </p>

      <h2>Informování, editace, nebo výmaz osobních údajů</h2>
      <p>
        Ze statutu nařízení máte právo ovlivnit způsob nakládání s vašimi
        osobními údaji. Zejména se jedná o:
      </p>

      <ul>
        <li>Právo na informace o zpracování vašich osobních údajů</li>
        <li>Právo na opravu osobních údajů</li>
        <li>Právo na odstranění (právo být zapomenut)</li>
      </ul>

      <p>
        <strong>
          Pro uplatnění tohoto práva využijte kontaktních údajů správce na
          začátku dokumentu.
        </strong>
      </p>

      <p className="mt-20 text-lg">
        Tyto podmínky nabývají účinnosti dnem {takesEffectDate}.
      </p>

      <p className="mt-20 text-lg font-semibold">
        Poslední aktualizace proběhla dne {lastDocumentUpdate}.
      </p>
    </section>
  );
}
