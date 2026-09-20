import ScrollReveal from "@/components/ScrollReveal";
import TableReservation from "@/components/TableReservation";
import WeddingQuoteForm from "@/components/WeddingQuoteForm";

export default function ReservePage() {
  return (
    <main className="flex-1">
      {/* Reservations Section */}
      <ScrollReveal delay={0.1}>
        <section id="reservations" className="py-24 px-4 sm:px-6 bg-stone-50 scroll-mt-20">
          <div className="max-w-3xl mx-auto">
            <TableReservation />
          </div>
        </section>
      </ScrollReveal>

      {/* Decorative divider */}
      <div className="divider-ornament max-w-5xl mx-auto px-4 py-8" aria-hidden="true">
        <span className="text-stone-400 font-serif text-xs">❦</span>
      </div>

      {/* Weddings & Private Functions Section */}
      <ScrollReveal delay={0.2}>
        <section id="weddings" className="py-24 px-4 sm:px-6 bg-white border-t border-stone-200 scroll-mt-20">
          <div className="max-w-4xl mx-auto">
            <WeddingQuoteForm />
          </div>
        </section>
      </ScrollReveal>
    </main>
  );
}
