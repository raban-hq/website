import { ContactCard } from "./contact-card";

export default function ContactPage() {
  return (
    <main className="px-[var(--gutter)] pb-[var(--content-gap)] pt-[var(--content-top)]">
      <div className="space-y-[var(--header-gap)] text-base text-ink">
        <h1 className="text-[length:var(--h1)] font-black leading-[var(--h1-line)]">Contact</h1>
        <p>No forms, no funnels. Just write to us.</p>
        <ContactCard />
      </div>
    </main>
  );
}
