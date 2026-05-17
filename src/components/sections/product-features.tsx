import {
  BarChart3,
  CalendarDays,
  Columns3,
  KanbanSquare,
  Mail,
  ShieldCheck,
  SquareKanban,
  Users2,
  Video,
} from 'lucide-react';
import Image from 'next/image';

import { cn } from '@/lib/utils';

const features = [
  {
    icon: Columns3,
    title: 'Munkaterek',
    badge: 'Alap',
    description: 'Strukturált projekthierarchia, sablonokkal.',
    subDescription:
      'A Munkaterek a rendszer kiindulópontja: minden projekt egy munkaterületen kap helyet, csoportokba szervezett kanban táblákkal. A hierarchia (Munkaterület → Csoport → Tábla → Lista → Kártya) bármilyen szervezeti struktúrát leképez. Előre elkészített tábla-, lista-, kártya- és mappastruktúrákat sablonként menthetsz, hogy egy új projekt percek alatt induljon.',
    image: '/images/modules/munkaterek.webp',
  },
  {
    icon: KanbanSquare,
    title: 'Kanban tábla',
    badge: 'Alap',
    description: 'Drag & drop feladatkezelés szűrőkkel.',
    subDescription:
      'Listák (oszlopok), bennük kártyák, amelyek szabadon mozgathatók — akár listák között is. A kártyákon egy pillantásra látható a feladat neve, felelőse, határideje, címkéi és státusza. Szabad szöveges keresés, címke-, státusz- és felelős-szűrő segíti a navigációt.',
    image: '/images/modules/kanban.webp',
  },
  {
    icon: SquareKanban,
    title: 'Kártya részletei',
    badge: 'Alap',
    description: 'Minden feladat-adat egy felületen.',
    subDescription:
      'Név, leírás (gazdag szövegszerkesztővel), felelős, határidő, címkék, státusz, ügyfél-kapcsolat, alfeladatok (checklisták), hozzászólások, csatolt fájlok és — ha az Email modul aktív — email beszélgetések. Egyedi mezők tetszőleges típusban: szöveg, szám, dátum, igen/nem, legördülő lista, pénznem, telefonszám és más.',
    image: '/images/modules/kartya.webp',
  },
  {
    icon: CalendarDays,
    title: 'Naptár',
    badge: 'Alap',
    description: 'Feladatok és találkozók egyetlen idővonalon.',
    subDescription:
      'Havi, heti és napi nézetben mutatja a kanban kártyák határidőit, az alfeladatokat és az ütemezett videó találkozókat (kéken). Innen közvetlenül a kártya részleteire navigálhatsz — nincs szükség külön naptáralkalmazásra.',
    image: '/images/modules/naptar.webp',
  },
  {
    icon: BarChart3,
    title: 'Statisztikák',
    badge: 'Alap',
    description: 'Lekérdezés-összeállító és exportálás.',
    subDescription:
      'Erőteljes lekérdezés-összeállítóval készíthetsz testreszabható riportokat: szűrés, csoportosítás (darabszám, összeg, átlag, min, max), értékcsere és számított oszlopok. Az eredmények Excel (XLSX) vagy CSV formátumba exportálhatók. A lekérdezések sablonként elmenthetők és jogosultságokkal védhetők.',
    image: '/images/modules/statisztika.webp',
  },
  {
    icon: ShieldCheck,
    title: 'Adminisztráció',
    badge: 'Alap',
    description: 'Felhasználók, szerepkörök, ACL.',
    subDescription:
      'Többszintű ACL rendszer: kanban tábla szinten 14 különböző jogosultság, munkaterület szinten olvasás/létrehozás/módosítás/törlés/duplikálás, mappánként háromszintű, egyedi mezőnként olvasás és szerkesztés. A jogosultságok hierarchikusan öröklődnek (Munkaterület → Csoport → Tábla → Kártya). Itt definiálod az egyedi mezőket, címkéket, státuszokat és dokumentum sablonokat is.',
    image: '/images/modules/adminisztracio.webp',
  },
  {
    icon: Users2,
    title: 'Ügyfelek',
    badge: 'Opcionális',
    description: 'Cégek és magánszemélyek nyilvántartása.',
    subDescription:
      'Cégeknél adószám, EU ÁFA, cégjegyzékszám, bank, számlázási/szállítási cím, kapcsolattartók és egyedi mezők; személyeknél vezeték- és keresztnév, születési adatok, adóazonosító, címek. Az ügyfelek kanban kártyákkal összerendelhetők, az email sablonokban pedig változókon keresztül automatikusan beszúrhatók az adataik.',
    image: '/images/modules/ugyfelek.webp',
  },
  {
    icon: Mail,
    title: 'Email kezelés',
    badge: 'Opcionális',
    description: 'Közös postaládák, beszélgetésnézet, sablonok.',
    subDescription:
      'Több postafiók közös kezelése (pl. Sales, Támogatás), beszélgetés-nézet szálakba rendezve, állapot szűrők (Nyitott, Várakozó, Kapcsolt). A levelek kanban kártyákhoz csatolhatók, formázott szöveg, fájlcsatolás támogatott. Email sablonok ügyfél-változókkal: {{customerName}}, {{customerEmail}}, {{customerPhone}}, {{customerAddress}}.',
    image: '/images/modules/email.webp',
  },
  {
    icon: Video,
    title: 'Videó találkozók',
    badge: 'Opcionális',
    description: 'Beépített videóhívás vendég-linkkel.',
    subDescription:
      'A találkozók megjelennek a CRM naptárban, a vendégek e-mail meghívóval, regisztráció és alkalmazás-telepítés nélkül csatlakoznak. Hang és videó (eszközválasztással), képernyőmegosztás, szöveges chat és résztvevő-lista. A hívás közvetlenül a kanban kártyáról is indítható — nincs szükség Zoom-ra vagy Teams-re.',
    image: '/images/modules/video-talalkozok.webp',
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
                <div className="flex items-center gap-3">
                  <h2 className="text-muted-foreground flex items-center gap-2 text-sm leading-snug font-medium md:text-base">
                    <feature.icon className="size-5" />
                    {feature.title}
                  </h2>
                  <span
                    className={cn(
                      'rounded-sm border px-2 py-0.5 text-xs font-medium',
                      feature.badge === 'Alap'
                        ? 'border-primary/30 bg-primary/10 text-primary'
                        : 'border-border bg-muted/40 text-muted-foreground',
                    )}
                  >
                    {feature.badge}
                  </span>
                </div>
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
