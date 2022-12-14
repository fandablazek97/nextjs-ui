import Alert from "@ui/Alert";
import AppLink from "@ui/AppLink";
import Button from "@ui/Button";
import FormCheckbox from "@ui/FormCheckbox";
import FormHnypot from "@ui/FormHnypot";
import FormTextArea from "@ui/FormTextArea";
import FormTextInput from "@ui/FormTextInput";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

type Props = {
  className?: string;
};

export default function ContactForm({ className = "" }: Props) {
  const [isMailSent, setIsMailSent] = useState(false);
  const [formError, setFormError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  // Honeypot refs
  const hnyNameRef = useRef<HTMLInputElement>(null);
  const hnySurnameRef = useRef<HTMLInputElement>(null);
  const hnyTelRef = useRef<HTMLInputElement>(null);
  const hnyEmailRef = useRef<HTMLInputElement>(null);

  // Submit handler
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    const hnyName = hnyNameRef.current!.value;
    const hnySurname = hnySurnameRef.current!.value;
    const hnyTel = hnyTelRef.current!.value;
    const hnyEmail = hnyEmailRef.current!.value;

    if (
      (hnyName === "" || hnyName === undefined) &&
      (hnySurname === "" || hnySurname === undefined) &&
      (hnyTel === "" || hnyTel === undefined) &&
      (hnyEmail === "" || hnyEmail === undefined)
    ) {
      emailjs
        .sendForm(
          "YOUR_SERVICE_ID",
          "YOUR_TEMPLATE_ID",
          formRef.current!,
          "YOUR_PUBLIC_KEY"
        )
        .then(
          // Success
          () => {
            setIsMailSent(true);
            e.target.reset();
            setIsLoading(false);
          },
          // Error
          () => {
            setFormError(true);
            setIsLoading(false);
          }
        );
    } else {
      setIsMailSent(true);
      e.target.reset();
      setIsLoading(false);
    }
  };
  return (
    <div className={`${className}`}>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className={`space-y-8`}
        aria-label="Kontaktn?? formul????"
      >
        {/* ---- Honey start - antispam ochrana ---- */}
        <FormHnypot ref={hnyNameRef} type="text" label="Jm??no" />
        <FormHnypot ref={hnySurnameRef} type="text" label="P????jmen??" />
        <FormHnypot ref={hnyTelRef} type="tel" label="Telefon" />
        <FormHnypot ref={hnyEmailRef} type="email" label="E-main" />
        {/* ---- Honey end - antispam ochrana ---- */}

        <FormTextInput
          type="text"
          name="name-surname"
          label="Jm??no a P????jmen??"
          placeholder="Jan Nov??k"
          isRequired
        />
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <FormTextInput
            type="email"
            name="email"
            label="V???? e-mail"
            placeholder="jan.novak@gmail.com"
            isRequired
            className="col-span-1"
          />
          <FormTextInput
            type="tel"
            name="tel"
            label="V???? telefon"
            placeholder="+420 123 456 789"
            isRequired
            className="col-span-1"
          />
        </div>
        <FormTextArea
          name="message"
          label="S ????m v??m m????eme pomoci?"
          placeholder="Popi??t?? V???? probl??m..."
          isRequired
        />
        <FormCheckbox
          name="gdpr"
          isRequired
          label={
            <span>
              Pro odesl??n?? formul????e mus??te souhlasit se zpracov??n??m osobn??ch
              ??daj??{" "}
              <AppLink
                href="/gdpr"
                hoverEffect="underline"
                className="text-copy-rich"
              >
                (v??ce informac??).
              </AppLink>
            </span>
          }
        />
        <Button type="submit" isLoading={isLoading}>
          Odeslat
        </Button>
        {isMailSent && (
          <Alert
            status="success"
            variant="tinted"
            title="V???? e-mail byl ??sp????n?? odesl??n"
            text="D??kujeme! V???? e-mail byl ??sp????n?? odesl??n. Hned jak to bude mo??n??, ozveme se v??m zp??t."
          />
        )}
        {formError && (
          <Alert
            status="error"
            variant="tinted"
            title="E-mail se nepoda??ilo odeslat"
            text="Bohu??el se e-mail nepoda??ilo odeslat. Zkontrolujte va??e p??ipojen?? k internetu, p????padn?? vyu??ijte jinou mo??nost kontaktu."
          />
        )}
      </form>
    </div>
  );
}
