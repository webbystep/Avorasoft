import {
  BarChart3,
  CalendarDays,
  ClipboardList,
  Columns3,
  FolderOpen,
  Handshake,
  Mail,
  MessageCircle,
  Users2,
} from 'lucide-react';
import Image from 'next/image';

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
    icon: FolderOpen,
    title: 'Projektek',
    description: 'Projektek átlátható kezelése.',
    subDescription:
      'Kövesd nyomon a projektjeid állapotát, felelőseit és határidejeit egy átlátható táblázatos nézetben. A projektek modulban mindent egy helyen láthatsz.',
    image: '/images/modules/projektek.png',
  },
  {
    icon: Columns3,
    title: 'KanBan tábla',
    description: 'Vizuális munkafolyamat-kezelés.',
    subDescription:
      'A KanBan tábla segítségével vizuálisan kezelheted a munkafolyamataidat. Húzd át a kártyákat az oszlopok között, kövesd a feladatok állapotát és tartsd kézben a projektjeidet.',
    image: '/images/modules/munkaterek.png',
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
    icon: Handshake,
    title: 'Partnerek',
    description: 'Az összes partner, alvállalkozó, beszállító egy helyen.',
    subDescription:
      'A partnerek modulban nyomon követheted az aktuális projekteket, amiket külsős cégekkel együtt végzel. Láthatod, hogy egy adott partnernél hány darab projekt fut jelenleg és, hogy hány munkatárs van hozzárendelve a projektekhez.',
    image: '/images/modules/kampanyok.png',
  },
  {
    icon: CalendarDays,
    title: 'Naptár',
    description: 'Kövesd nyomon az eseményeket.',
    subDescription:
      'A naptár modul segítségével egyetlen felületen követheted nyomon a vállalkozásodhoz kapcsolódó eseményeket, találkozókat és határidőket. Könnyedén láthatod a napi, heti vagy havi bontású teendőidet, valamint megkülönböztetheted a különféle eseménytípusokat – például meetingeket, rendezvényeket vagy csapatépítő alkalmakat. Az események színkódolással jelennek meg, így gyorsan átláthatóvá válik a programod.',
    image: '/images/modules/naptar.png',
  },
  {
    icon: BarChart3,
    title: 'Statisztika',
    description: 'Az adat a lényeg...',
    subDescription:
      'A statisztikák modulban részletes lekérdezéseket készíthetsz az adataidból, így pontos képet kapsz a vállalkozásod teljesítményéről. Könnyedén összeállíthatsz egyedi riportokat a leadekről, ajánlatokról, partnerekről vagy projektek állapotáról. A korábbi lekérdezések elmenthetők és újra felhasználhatók.',
    image: '/images/modules/statisztika.png',
  },
  {
    icon: MessageCircle,
    title: 'Chat',
    description: 'Belső kommunikáció egy helyen.',
    subDescription:
      'Kommunikálj a csapattagokkal közvetlenül a CRM-en belül. Fájlok küldése, képek megosztása és valós idejű üzenetváltás egy helyen.',
    image: '/images/modules/chat.png',
  },
  {
    icon: Mail,
    title: 'Email kezelés',
    description: 'Üzleti levelezés a CRM-ből.',
    subDescription:
      'Kezeld az üzleti levelezésedet közvetlenül a CRM-ből. Sablonok, tömeges küldés és nyomon követés egy integrált felületen.',
    image: '/images/modules/email.png',
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
              index % 2 === 0 && 'md:border-e',
              index < features.length - 2 && 'border-b',
              index === features.length - 1 &&
                'border-t md:border-t-0 md:border-s',
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
