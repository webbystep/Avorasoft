import Image from 'next/image';
import Link from 'next/link';

import { BrowserFrame } from '@/components/ui/browser-frame';
import { Button } from '@/components/ui/button';

export function ProductHero() {
  return (
    <section className="container">
      <div className="bordered-div-padding flex flex-col items-center gap-8 border-x text-center md:gap-10 lg:gap-16 lg:!py-25">
        {/* Main Heading */}
        <div className="max-w-4xl space-y-6 md:space-y-8 lg:space-y-12">
          <h1 className="font-weight-display text-2xl leading-snug tracking-tighter md:text-3xl lg:text-5xl">
            Modulok az Avorasoft CRM-ben.
          </h1>
          <p className="text-muted-foreground mx-auto max-w-[700px] text-sm leading-relaxed md:text-lg lg:text-xl">
            Hat alapmodul minden ügyfélnek jár — feladatkezelés, naptár,
            dokumentumtárolás, statisztikák, automatizmusok és adminisztráció.
            Mellette opcionálisan bekapcsolható az ügyfél-nyilvántartás, az
            email-kezelés, a beépített videó találkozók és a webformok. Csak
            azért fizetsz, amire ténylegesen szükséged van.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          <Button asChild className="md:px-10">
            <Link href="/contact">Bemutató kérése</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/faq">Gyakori kérdések</Link>
          </Button>
        </div>
      </div>
      <div className="bordered-div-padding relative flex items-center justify-center border-x">
        <div
          aria-hidden="true"
          className="bg-primary/20 absolute inset-x-0 top-0 mx-auto h-64 max-w-3xl rounded-full blur-3xl"
        />
        <BrowserFrame
          url="cegnev.avorasoft.hu/munkaterek"
          className="relative w-full max-w-5xl"
        >
          <Image
            src="/images/modules/kanban.webp"
            alt="Avorasoft CRM modulok"
            width={1320}
            height={743}
            priority
            className="w-full"
          />
        </BrowserFrame>
      </div>
    </section>
  );
}
