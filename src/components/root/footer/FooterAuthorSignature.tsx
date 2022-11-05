type FooterAuthorSignatureProps = {
  className?: string;
};

export default function FooterAuthorSignature({
  className = "",
}: FooterAuthorSignatureProps) {
  return (
    <a
      href="https://reveal.cz"
      target="_blank"
      rel="noreferrer author external"
      className={`my-2 min-w-[161px] self-center rounded-md bg-black py-3 px-5 text-xs font-bold tracking-widest text-white outline-none transition-shadow focus-visible:ring-4 focus-visible:ring-copy-rich/70 ${className}`}
    >
      <img
        src="/svg/reveal-logo-signature.svg"
        alt="Logo autora webu"
        width="10"
        height="10"
        className="mr-3 inline -translate-y-0.5 invert"
      />
      <span>Vytvořili Reveal</span>
    </a>
  );
}
