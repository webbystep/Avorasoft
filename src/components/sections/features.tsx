import { CalendarDays, ClipboardList, Columns3, Users2 } from 'lucide-react';
import Image from 'next/image';

import { PlusSigns } from '@/components/icons/plus-signs';
import { cn } from '@/lib/utils';

const features = [
  {
    icon: ClipboardList,
    title: 'Feladatok',
    description: 'Nincs több végre nem hajtott, elfelejtett feladat...',
    subDescription:
      'A teendők modul, az aktuális napi, illetve jövőbeni teendőket jeleníti meg a felhasználók részére. Jogosultsági szinttől függően a felhasználók új teendőket adhatnak hozzá, munkatársakat jelölhetnek ki a feladat elvégzésére, valamint megváltoztathatják a feladatok státuszát és beállíthatják a feladat lejáratát. A feladatok megjelölhetőek cimkékkel, melyek a feladatok sürgősségét (prioritását) ábrázolják.',
    image: '/images/modules/feladatok.png',
  },
  {
    icon: Columns3,
    title: 'Munkaterek',
    description: 'Mindenki számára vizualizálja a folyamatokat.',
    subDescription:
      'A KanBan tábla jól nyomon követhetővé teszi a gyártást, fejlesztést és a szolgáltatói projekteket. Mérhetővé és szabályozhatóvá teszi a folyamatot. A KanBan azok számára is jó megoldás lehet, akik szeretnék átláthatóbbá tenni a vállalkozáson belüli munkafolyamatokat.',
    image: '/images/modules/kanban.png',
  },
  {
    icon: Users2,
    title: 'Munkatársak',
    description: 'Kövesd munkatársaid teljesítményét.',
    subDescription:
      'A munkatársak modulban egy helyen kezelheted és láthatod az összes dolgozót. Nyomon követheted, hogy melyik munkatársnak mennyi teendője, illetve feladata van jelenleg és új teendőket, feladatokat delegálhatsz számukra.',
    image: '/images/modules/ugyfelek.png',
  },
  {
    icon: CalendarDays,
    title: 'Naptár',
    description: 'Kövesd nyomon az eseményeket.',
    subDescription:
      'A naptár modul segítségével egyetlen felületen követheted nyomon a vállalkozásodhoz kapcsolódó eseményeket, találkozókat és határidőket. Könnyedén láthatod a napi, heti vagy havi bontású teendőidet, valamint megkülönböztetheted a különféle eseménytípusokat. Az események színkódolással jelennek meg, így gyorsan átláthatóvá válik a programod.',
    image: '/images/modules/naptar.png',
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
              index === 0 && 'border-b md:border-e',
              index === 1 && 'border-b md:border-b-0',
              index === 3 && 'border-t md:border-s',
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

            <div className="mask-b-from-50% mask-b-to-95%">
              <Image
                src={feature.image}
                alt={feature.title}
                width={700}
                height={400}
                className="rounded-sm"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
