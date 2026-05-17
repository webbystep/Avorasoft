import { Quote } from 'lucide-react';
import Image from 'next/image';

import { cn } from '@/lib/utils';

const testimonials = [
  {
    logo: '/clients/a1-solar.svg',
    company: 'A1 Solar Kft.',
    quote:
      'Az Avorasoft jelentősen egyszerűsítette a napi működésünket. A feladatok, ügyfélfolyamatok és belső egyeztetések átláthatóbbá váltak, így a csapat gyorsabban és szervezettebben tud dolgozni.',
  },
  {
    logo: '/clients/energrosso.svg',
    company: 'Energrosso Kft.',
    quote:
      'Az Avorasoft segítségével a mindennapi operatív feladatainkat egy rendszerben tudjuk kezelni. Nagy előnye, hogy támogatja a csapatmunkát, gyorsítja az információáramlást, és sokkal követhetőbbé teszi a belső folyamatainkat.',
  },
];

export function SocialProof() {
  return (
    <section className="container">
      <div className="bg-card grid grid-cols-1 border md:grid-cols-2">
        {testimonials.map((t, i) => (
          <figure
            key={t.company}
            className={cn(
              'bordered-div-padding flex flex-col gap-6',
              i === 0 && 'border-b md:border-b-0 md:border-e',
            )}
          >
            <Quote
              className="text-primary size-7 shrink-0"
              aria-hidden="true"
            />
            <blockquote className="font-weight-display text-foreground text-base leading-snug md:text-lg">
              „{t.quote}”
            </blockquote>
            <figcaption className="mt-auto flex items-center gap-4 pt-2">
              <div className="relative h-10 w-32 shrink-0 md:h-12 md:w-40">
                <Image
                  src={t.logo}
                  alt={`${t.company} logo`}
                  fill
                  className="object-contain object-left"
                />
              </div>
              <span className="text-muted-foreground text-sm font-medium">
                {t.company}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
