import { CONTACT } from "@/lib/site";
import { useI18n } from "@/lib/i18n";

export function WhatsAppFab() {
  const { t } = useI18n();
  const label = t("Falar no WhatsApp");

  return (
    <a
      href={CONTACT.whatsappHref}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={label}
      title={label}
      className="group fixed bottom-6 right-6 z-[60] flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-4 text-graphite shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-action focus-visible:ring-offset-2 sm:px-5"
    >
      <svg viewBox="0 0 32 32" aria-hidden="true" className="size-6 fill-current">
        <path d="M16.04 3C8.9 3 3.1 8.8 3.1 15.94c0 2.28.6 4.5 1.74 6.46L3 29l6.78-1.78a12.9 12.9 0 0 0 6.26 1.6h.01c7.14 0 12.94-5.8 12.94-12.94C28.99 8.8 23.18 3 16.04 3Zm0 23.62h-.01a10.7 10.7 0 0 1-5.46-1.5l-.39-.23-4.02 1.05 1.07-3.92-.25-.4a10.66 10.66 0 0 1-1.64-5.68c0-5.93 4.83-10.76 10.77-10.76 2.87 0 5.57 1.12 7.6 3.15a10.68 10.68 0 0 1 3.15 7.62c0 5.94-4.83 10.67-10.82 10.67Zm5.9-8a44 44 0 0 0-2.18-1c-.29-.11-.5-.16-.71.16-.21.32-.82 1-1 1.21-.19.21-.37.24-.66.08-.29-.16-1.24-.46-2.36-1.46-.87-.78-1.46-1.74-1.63-2.03-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.5.14-.18.19-.3.29-.5.1-.2.05-.37-.02-.53-.08-.16-.71-1.71-.98-2.34-.26-.62-.52-.53-.71-.54h-.61c-.21 0-.55.08-.84.4-.29.32-1.1 1.08-1.1 2.63s1.13 3.05 1.29 3.26c.16.21 2.22 3.39 5.38 4.75.75.32 1.34.52 1.8.67.76.24 1.44.21 1.99.13.61-.09 1.87-.76 2.13-1.5.26-.74.26-1.37.18-1.5-.08-.13-.29-.21-.6-.36Z" />
      </svg>
      <span className="hidden text-[11px] font-medium uppercase tracking-[0.16em] sm:inline">{label}</span>
    </a>
  );
}
