import { Handshake, BarChart3, CalendarDays, ClipboardList } from 'lucide-react';
import Image from 'next/image';

import { cn } from '@/lib/utils';

const features = [
  {
    icon: ClipboardList,
    title: 'Feladatok',
    description: 'Feladatkezelés és delegálás',
    subDescription:
      'A teendők modul az aktuális napi, illetve jövőbeni teendőket jeleníti meg. Jogosultsági szinttől függően új teendőket adhatsz hozzá, munkatársakat jelölhetsz ki és beállíthatod a prioritást.',
    className: '',
    images: [
      {
        src: '/images/product/feature-1.webp',
        alt: 'Feladatok modul',
        width: 700,
        height: 320,
        className: '',
      },
    ],
  },
  {
    icon: Handshake,
    title: 'Partnerek',
    description: 'Minden partner egy helyen',
    subDescription:
      'A partnerek modulban nyomon követheted az aktuális projekteket, amiket külsős cégekkel együtt végzel. Láthatod, hogy egy adott partnernél hány projekt fut és mennyi munkatárs van hozzárendelve.',
    className: '',
    images: [
      {
        src: '/images/product/feature-2.webp',
        alt: 'Partnerek modul',
        width: 620,
        height: 108,
        className: '',
      },
    ],
  },
  {
    icon: CalendarDays,
    title: 'Naptár',
    description: 'Események, találkozók, határidők',
    subDescription:
      'Egyetlen felületen követheted nyomon a vállalkozásodhoz kapcsolódó eseményeket. Napi, heti vagy havi bontásban, színkódolással megkülönböztetheted az eseménytípusokat.',
    images: [
      {
        src: '/images/product/feature-3-1.webp',
        alt: 'Naptár modul',
        width: 326,
        height: 170,
        className: '',
      },
      {
        src: '/images/product/feature-3-2.webp',
        alt: 'Naptár modul',
        width: 419,
        height: 170,
        className: 'self-end',
      },
    ],
  },
  {
    icon: BarChart3,
    title: 'Statisztika',
    description: 'Riportok és elemzések',
    subDescription:
      'Részletes lekérdezéseket készíthetsz az adataidból. Egyedi riportokat állíthatsz össze, amelyek elmenthetők és újra felhasználhatók.',
    images: [
      {
        src: '/images/product/feature-4-1.webp',
        alt: 'Statisztika',
        width: 327,
        height: 60,
        className: '',
      },
      {
        src: '/images/product/feature-4-2.webp',
        alt: 'Statisztika',
        width: 316,
        height: 60,
        className: 'self-end',
      },
      {
        src: '/images/product/feature-4-3.webp',
        alt: 'Statisztika',
        width: 271,
        height: 84,
        className: '',
      },
      {
        src: '/images/product/feature-4-4.webp',
        alt: 'Statisztika',
        width: 221,
        height: 60,
        className: 'self-end',
      },
      {
        src: '/images/product/feature-4-5.webp',
        alt: 'Statisztika',
        width: 174,
        height: 56,
        className: 'absolute bottom-24 right-[4vw]',
      },
      {
        src: '/images/product/feature-4-6.webp',
        alt: 'Statisztika',
        width: 96,
        height: 42,
        className: 'absolute top-22 left-[4vw]',
      },
    ],
  },
];

export function ProductFeatures() {
  return (
    <section className="container">
      <div className="grid grid-cols-1 border border-t-0 md:grid-cols-2">
        {features.map((feature, index) => (
          <div
            key={index}
            className={cn(
              'bordered-div-padding space-y-8',
              index == 0 && 'border-b md:border-e',
              index == 1 && 'border-b md:border-b-0',
              index == 3 && 'border-t md:border-s',
              feature.className,
            )}
          >
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
              <div
                className={cn(
                  'relative flex flex-col gap-4',
                  index == 2 && 'mask-b-from-30% mask-b-to-95%',
                )}
              >
                {feature.images.map((image, index) => (
                  <Image
                    key={index}
                    src={image.src}
                    alt={''}
                    width={image.width}
                    height={image.height}
                    className={image.className}
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
