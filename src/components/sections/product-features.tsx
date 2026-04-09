import {
  BarChart3,
  CalendarDays,
  ClipboardList,
  Columns3,
  FolderOpen,
  Handshake,
  Mail,
  MessageCircle,
  Megaphone,
  Users2,
} from 'lucide-react';
import Image from 'next/image';

import { cn } from '@/lib/utils';

const features = [
  {
    icon: Columns3,
    title: 'Munkaterek',
    description: 'Saját és csapat munkaterek kezelése.',
    subDescription:
      'A munkaterek modulban átláthatóan szervezheted a projektjeidet, csapataidat és a hozzájuk tartozó feladatokat.',
    image: '/images/modules/munkaterek.png',
  },
  {
    icon: ClipboardList,
    title: 'KanBan tábla',
    description: 'Vizualizáld a folyamatokat.',
    subDescription:
      'A KanBan tábla nyomon követhetővé teszi a gyártást, fejlesztést és a szolgáltatói projekteket. Mérhetővé és szabályozhatóvá teszi a munkafolyamatokat.',
    image: '/images/modules/kanban.png',
  },
  {
    icon: FolderOpen,
    title: 'Feladatok',
    description: 'Nincs több elfelejtett feladat.',
    subDescription:
      'A teendők modul az aktuális napi és jövőbeni teendőket jeleníti meg. Munkatársakat jelölhetsz ki, státuszokat változtathatsz és prioritást állíthatsz be.',
    image: '/images/modules/feladatok.png',
  },
  {
    icon: FolderOpen,
    title: 'Projektek',
    description: 'Projektek táblázatos nézete.',
    subDescription:
      'Kövesd nyomon a projektjeid állapotát, felelőseit és határidejeit egy átlátható táblázatos nézetben.',
    image: '/images/modules/projektek.png',
  },
  {
    icon: Users2,
    title: 'Ügyfelek',
    description: 'Ügyfelek és cégek kezelése.',
    subDescription:
      'Egy helyen kezelheted az összes ügyfelet, céget és személyt. Szűrhetsz típus szerint és új ügyfeleket vehetsz fel.',
    image: '/images/modules/ugyfelek.png',
  },
  {
    icon: CalendarDays,
    title: 'Naptár',
    description: 'Események, találkozók, határidők.',
    subDescription:
      'Egyetlen felületen követheted nyomon a vállalkozásodhoz kapcsolódó eseményeket. Napi, heti vagy havi bontásban, színkódolással.',
    image: '/images/modules/naptar.png',
  },
  {
    icon: BarChart3,
    title: 'Statisztika',
    description: 'Riportok és elemzések.',
    subDescription:
      'Részletes lekérdezéseket készíthetsz az adataidból. Egyedi riportokat állíthatsz össze, amelyek elmenthetők és újra felhasználhatók.',
    image: '/images/modules/statisztika.png',
  },
  {
    icon: MessageCircle,
    title: 'Chat',
    description: 'Belső üzenetküldés.',
    subDescription:
      'Kommunikálj a csapattagokkal közvetlenül a CRM-en belül. Fájlok küldése, képek megosztása egy helyen.',
    image: '/images/modules/chat.png',
  },
  {
    icon: Mail,
    title: 'Email kezelés',
    description: 'Email-ek egy helyen.',
    subDescription:
      'Kezeld az üzleti levelezésedet közvetlenül a CRM-ből. Sablonok, tömeges küldés és nyomon követés.',
    image: '/images/modules/email.png',
  },
  {
    icon: Megaphone,
    title: 'Kampányok',
    description: 'Marketing kampányok kezelése.',
    subDescription:
      'Tervezd és kövesd nyomon a marketing kampányaidat. Célcsoportok kezelése és eredmények mérése.',
    image: '/images/modules/kampanyok.png',
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
              index === features.length - 1 && 'border-t md:border-t-0 md:border-s',
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
