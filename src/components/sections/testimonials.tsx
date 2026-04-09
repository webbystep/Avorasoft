import { Verified } from 'lucide-react';

import { Meteors } from '@/components/magicui/meteors';

export function Testimonials() {
  return (
    <section className="container">
      <div className="relative overflow-hidden border border-t-0">
        <div className="pointer-events-none absolute inset-0 hidden md:block">
          <Meteors
            number={1000}
            angle={65}
            maxDuration={20}
            minDuration={5}
            className="opacity-10 [&>div]:opacity-10"
          />
        </div>
        <div className="bordered-div-padding relative">
          <h2 className="text-muted-foreground flex items-center gap-2 text-sm leading-snug font-medium md:text-base">
            <Verified className="size-5" />
            A szoftverről
          </h2>
        </div>
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
