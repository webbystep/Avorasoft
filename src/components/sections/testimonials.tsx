import { Verified } from 'lucide-react';

export function Testimonials() {
  return (
    <section className="container">
      <div className="bordered-div-padding border border-t-0">
        <h2 className="text-muted-foreground flex items-center gap-2 text-sm leading-snug font-medium md:text-base">
          <Verified className="size-5" />
          A szoftverről
        </h2>
      </div>
      {/* Testimonial */}
      <blockquote className="bordered-div-padding flex flex-col justify-between gap-8 border border-t-0 md:flex-row">
        <p className="lg:text-4xxl font-weight-display flex-7 text-2xl leading-snug tracking-tighter md:text-3xl">
          Kizárólag az van benne, amire szükséged van.
        </p>

        <footer className="flex-6 self-end">
          <p className="text-muted-foreground text-sm leading-relaxed md:text-lg lg:text-xl">
            Nincs felesleges, ki nem használt funkció. Kizárólag azokat a
            modulokat aktiváljuk neked, amikre szükséged van, mindezt teljesen
            személyre szabottan, a céged arculatához illően.
          </p>
        </footer>
      </blockquote>
    </section>
  );
}
