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
      <blockquote className="bordered-div-padding flex flex-col justify-between gap-8 border border-t-0 md:flex-row">
        <div className="flex-7 space-y-4">
          <p className="lg:text-4xxl font-weight-display text-2xl leading-snug tracking-tighter md:text-3xl">
            Kizárólag az van benne, ami kell...
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed md:text-base">
            Nincs felesleges, ki nem használt funkció. Kizárólag azokat a
            modulokat aktiváljuk neked, amikre szükséged van, mindezt teljesen
            személyre szabottan, a céged arculatához illően.
          </p>
        </div>

        <div className="flex-6 self-end space-y-4">
          <p className="font-weight-display text-lg leading-snug md:text-xl">
            Fokozd a csapatod hatékonyságát
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed md:text-base">
            Mi hisszük, hogy a csapatmunkában van az erő és a szoftver minden
            egyes funkciója ezt támogatja. Emeld új szintre csapatod
            teljesítményét. Az Avorasoft CRM tartalmazza az összes olyan modult,
            amitől CRM egy CRM és még annál is többet.
          </p>
        </div>
      </blockquote>
    </section>
  );
}
