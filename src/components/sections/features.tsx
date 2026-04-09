import { CalendarDays, ClipboardList, Columns3, Users2 } from 'lucide-react';
import Image from 'next/image';

import { PlusSigns } from '@/components/icons/plus-signs';
import { cn } from '@/lib/utils';

const features = [
  {
    icon: ClipboardList,
    title: 'Feladatok',
    description: 'Nincs több elfelejtett feladat.',
    subDescription:
      'A teendők modul az aktuális napi, illetve jövőbeni teendőket jeleníti meg. Munkatársakat jelölhetsz ki, megváltoztathatod a státuszokat és beállíthatod a prioritást.',
    image: '/images/modules/feladatok.png',
  },
  {
    icon: Columns3,
    title: 'Munkaterek',
    description: 'Vizualizáld a folyamatokat.',
    subDescription:
      'A KanBan tábla jól nyomon követhetővé teszi a gyártást, fejlesztést és a szolgáltatói projekteket. Mérhetővé és szabályozhatóvá teszi a folyamatot.',
    image: '/images/modules/kanban.png',
  },
  {
    icon: Users2,
    title: 'Ügyfelek',
    description: 'Kövesd az ügyfeleidet.',
    subDescription:
      'Egy helyen kezelheted az összes ügyfelet, céget és személyt. Szűrhetsz típus szerint és új ügyfeleket vehetsz fel egyszerűen.',
    image: '/images/modules/ugyfelek.png',
  },
  {
    icon: CalendarDays,
    title: 'Naptár',
    description: 'Kövesd nyomon az eseményeket.',
    subDescription:
      'Egyetlen felületen követheted nyomon a vállalkozásodhoz kapcsolódó eseményeket, találkozókat és határidőket. Napi, heti vagy havi bontásban, színkódolással.',
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
