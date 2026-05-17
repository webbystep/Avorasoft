'use client';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { BrowserFrame } from '@/components/ui/browser-frame';
import { Button } from '@/components/ui/button';
import { MovingBorder } from '@/components/ui/moving-border';
import { cn } from '@/lib/utils';

export function Hero() {
  return (
    <section className="">
      <div className="container">
        <div className="bordered-div-padding relative flex flex-col items-center gap-6 border-x text-center md:gap-7 lg:gap-8 lg:!py-25">
          {/* Main Heading */}
          <div className="max-w-4xl space-y-6 md:space-y-8 lg:space-y-12">
            {/* Beta Banner */}
            <Link
              href="/contact"
              className="relative inline-flex items-center overflow-hidden rounded-sm bg-[#ececec] p-[1px]"
            >
              <MovingBorder duration={4000}>
                <div
                  className={cn(
                    'h-18 w-25 bg-[radial-gradient(#F14F04_40%,transparent_60%)] opacity-[0.8]',
                  )}
                />
              </MovingBorder>
              <Button
                variant="outline"
                size="sm"
                className="relative border-none"
              >
                Kérj ingyenes bemutatót
                <ArrowRight className="ml-1" />
              </Button>
            </Link>
            <h1 className="font-weight-display text-2xl leading-snug tracking-tighter md:text-3xl lg:text-5xl">
              Egy Adatvezérelt CRM,{' '}
              <span className="block">modern csapatok számára.</span>
            </h1>
            <p className="text-muted-foreground mx-auto max-w-[700px] text-sm leading-relaxed md:text-lg lg:text-xl">
              Az Avorasoft CRM egy modern, webalapú ügyfélkapcsolat- és
              projektmenedzsment rendszer. Feladatkezelés, ügyfél-nyilvántartás,
              dokumentumtárolás, email- és videókommunikáció egyetlen platformon
              — moduláris felépítéssel, a céged működéséhez igazítva. SaaS
              modellben, böngészőből, telepítés nélkül.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <Button asChild>
              <Link href="/contact">Bemutató kérése</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/product">Modulok megtekintése</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="bordered-div-padding relative flex items-center justify-center border-x">
          <div
            aria-hidden="true"
            className="bg-primary/20 absolute inset-x-0 top-0 mx-auto h-64 max-w-3xl rounded-full blur-3xl"
          />
          <BrowserFrame
            url="cegnev.avorasoft.hu"
            className="relative w-full max-w-5xl"
          >
            <Image
              src="/images/hero.webp"
              alt="Avorasoft CRM dashboard"
              width={1320}
              height={743}
              priority
              className="w-full"
            />
          </BrowserFrame>
        </div>
      </div>
    </section>
  );
}
