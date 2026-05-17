import { CalendarDays, Columns3, KanbanSquare, Users2 } from 'lucide-react';
import Image from 'next/image';

import { cn } from '@/lib/utils';

const features = [
  {
    icon: Columns3,
    title: 'Munkaterek',
    description: 'Projektek strukturált, vizuális szervezése.',
    subDescription:
      'A munkaterek a rendszer kiindulópontja: minden projekt egy munkaterületen belül kap helyet, csoportokba szervezett kanban táblákkal. A hierarchia (Munkaterület → Csoport → Tábla → Lista → Kártya) bármilyen szervezeti struktúrát leképez, a hozzáférések pedig öröklődnek a szinteken keresztül.',
    image: '/images/modules/munkaterek.webp',
  },
  {
    icon: KanbanSquare,
    title: 'Kanban tábla',
    description: 'Drag & drop feladatkezelés egyetlen pillantásra.',
    subDescription:
      'Minden tábla listákból (oszlopokból) áll, amelyekben a kártyák szabadon mozgathatók — akár listák között is. A kártyákon egy pillantásra látható a feladat neve, felelőse, határideje, címkéi és státusza. Szabad szöveges keresés, címke-, státusz- és felelős-szűrő segíti a navigációt.',
    image: '/images/modules/kanban.webp',
  },
  {
    icon: CalendarDays,
    title: 'Naptár',
    description: 'Feladatok és találkozók egyetlen idővonalon.',
    subDescription:
      'Havi, heti és napi nézetben mutatja a kanban kártyák határidőit, az alfeladatokat és az ütemezett videó találkozókat (kéken). A naptárból közvetlenül a kártya részleteire navigálhatsz — nincs szükség külön naptáralkalmazásra.',
    image: '/images/modules/naptar.webp',
  },
  {
    icon: Users2,
    title: 'Ügyfelek',
    description: 'Cégek és magánszemélyek nyilvántartása.',
    subDescription:
      'Két ügyféltípust támogat: cégeknél adószám, EU ÁFA, cégjegyzékszám, bank, számlázási/szállítási cím és kapcsolattartók; személyeknél vezeték- és keresztnév, születési adatok, adóazonosító, címek. Az ügyfelek kanban kártyákkal és email sablon-változókkal is összerendelhetők.',
    image: '/images/modules/ugyfelek.webp',
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

            <div className="bg-accent rounded-md p-3 md:p-5">
              <Image
                src={feature.image}
                alt={feature.title}
                width={700}
                height={400}
                className="w-full rounded-sm"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
