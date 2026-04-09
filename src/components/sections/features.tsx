import { CalendarDays, ClipboardList, Columns3, Users2 } from 'lucide-react';
import Image from 'next/image';

import { PlusSigns } from '@/components/icons/plus-signs';
import { cn } from '@/lib/utils';
const features = [
  {
    icon: ClipboardList,
    title: (
      <>
        Feladatok
      </>
    ),
    description: 'Nincs több elfelejtett feladat.',
    subDescription:
      'A teendők modul az aktuális napi, illetve jövőbeni teendőket jeleníti meg. Munkatársakat jelölhetsz ki, megváltoztathatod a státuszokat és beállíthatod a prioritást.',
    className: '!pb-0',
    images: [
      {
        src: '/images/landing/feature-1.webp',
        alt: 'Feladatok modul',
        width: 700,
        height: 320,
      },
    ],
  },
  {
    icon: Columns3,
    title: 'Munkaterek',
    description: 'Vizualizáld a folyamatokat.',
    subDescription:
      'A KanBan tábla jól nyomon követhetővé teszi a gyártást, fejlesztést és a szolgáltatói projekteket. Mérhetővé és szabályozhatóvá teszi a folyamatot.',
    className: '!pb-0',
    images: [
      {
        src: '/images/landing/feature-2-1.webp',
        alt: 'Munkaterek',
        width: 620,
        height: 108,
      },
      {
        src: '/images/landing/feature-2-2.webp',
        alt: 'Munkaterek',
        width: 620,
        height: 108,
      },
      {
        src: '/images/landing/feature-2-3.webp',
        alt: 'Munkaterek',
        width: 620,
        height: 108,
      },
    ],
  },
  {
    icon: Users2,
    title: 'Munkatársak',
    description: 'Kövesd a csapatod teljesítményét.',
    subDescription:
      'Egy helyen kezelheted és láthatod az összes dolgozót. Nyomon követheted, hogy melyik munkatársnak mennyi teendője van és új feladatokat delegálhatsz számukra.',
  },
  {
    icon: CalendarDays,
    title: 'Naptár',
    description: 'Kövesd nyomon az eseményeket.',
    subDescription:
      'Egyetlen felületen követheted nyomon a vállalkozásodhoz kapcsolódó eseményeket, találkozókat és határidőket. Napi, heti vagy havi bontásban, színkódolással.',
  },
];

export function Features() {
  return (
    <section className="container">
      <div className="grid grid-cols-1 border border-t-0 md:grid-cols-2">
        {features.map((feature, index) => (
          <div
            key={index}
            className={cn(
              'bordered-div-padding relative space-y-8',
              index == 0 && 'border-b md:border-e',
              index == 1 && 'border-b md:border-b-0',
              index == 3 && 'border-t md:border-s',
              feature.className,
            )}
          >
            {index === 0 && (
              <PlusSigns className="absolute inset-0 -mt-0.25 hidden !h-[calc(100%+2px)] -translate-x-full border-y md:block" />
            )}
            <div className="space-y-4 md:space-y-6">
              <div className="space-y-4">
                <h2 className="text-muted-foreground flex items-center gap-2 text-sm leading-snug font-medium md:text-base">
                  <feature.icon className="size-5" />
                  {feature.title}
                </h2>
                <h3 className="text-foreground font-weight-display leading-snug md:text-xl">
                  {feature.description}
                </h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed md:text-base">
                {feature.subDescription}
              </p>
            </div>

            {feature.images && (
              <div className="flex flex-col gap-4 mask-b-from-30% mask-b-to-95%">
                {feature.images.map((image, index) => (
                  <Image
                    key={index}
                    src={image.src}
                    alt={''}
                    width={image.width}
                    height={image.height}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
