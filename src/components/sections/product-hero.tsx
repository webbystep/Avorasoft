import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export function ProductHero() {
  return (
    <section className="container">
      <div className="bordered-div-padding flex flex-col items-center gap-8 border-x text-center md:gap-10 lg:gap-16 lg:!py-25">
        {/* Main Heading */}
        <div className="max-w-4xl space-y-6 md:space-y-8 lg:space-y-12">
          <h1 className="font-weight-display text-2xl leading-snug tracking-tighter md:text-3xl lg:text-5xl">
            Modulok áttekintése
          </h1>
          <p className="text-muted-foreground mx-auto max-w-[700px] text-sm leading-relaxed md:text-lg lg:text-xl">
            Az Avorasoft CRM tartalmazza az összes olyan modult, amitől egy CRM
            igazán hatékony, és még annál is többet.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          <Button asChild className="md:px-10">
            <Link href="/contact">Bemutató kérése</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/faq">
              Gyakori kérdések
            </Link>
          </Button>
        </div>
      </div>
      <div className="bordered-div-padding flex items-center justify-center border">
        <Image
          src="/images/modules/projektek.png"
          alt="Avorasoft CRM modulok"
          width={1320}
          height={743}
          priority
          className="mask-b-from-55% mask-b-to-95%"
        />
      </div>
    </section>
  );
}
