import { FileText, FormInput, Plug, Workflow } from 'lucide-react';

import { cn } from '@/lib/utils';

const extras = [
  {
    icon: FileText,
    title: 'Dokumentumkezelés',
    badge: 'Alap',
    description:
      'Felhőalapú fájltárolás tetszőleges mélységű mappa-hierarchiával, drag & drop feltöltéssel és böngészőben megjelenő előnézettel (képek, PDF). Háromszintű hozzáférés-szabályozás mappánként, név szerinti keresés.',
  },
  {
    icon: Workflow,
    title: 'Automatizmusok (Flow)',
    badge: 'Alap',
    description:
      'Esemény-alapú munkafolyamatok a kanban tábla szintjén. Triggerek: kártya létrehozása/mozgatása/törlése, határidő, státusz- vagy címkeváltás, felelős-módosítás. Akciók: áthelyezés, címke- és státuszbeállítás, email értesítés, feladat-kiosztás, késleltetés.',
  },
  {
    icon: FormInput,
    title: 'Webformok',
    badge: 'Opcionális',
    description:
      'Publikus űrlapok adatgyűjtéshez. Szöveg, szám, jelölőnégyzet, legördülő, fájlfeltöltés, dátum, telefonszám, információs blokk. Szekciók és feltételes mezőmegjelenítés. A válaszok automatikusan az egyedi mezőkbe, a feltöltött fájlok a kártya tárhelyére kerülnek.',
  },
  {
    icon: Plug,
    title: 'External API',
    badge: 'Alap',
    description:
      'REST API külső rendszerek integrációjához. Kanban feladatok létrehozása, egyedi mezők és fájlfeltöltés (App Integration Tokennel), ügyfél-rekordok kezelése, webform-válaszok beküldése. Tipikus felhasználás: webshop → CRM, ERP-szinkronizáció, marketing platform integráció. OpenAPI/Swagger specifikáció elérhető.',
  },
];

export function ProductExtras() {
  return (
    <section className="container">
      <div className="bordered-div-padding border border-t-0">
        <h2 className="font-weight-display text-xl leading-snug md:text-2xl lg:text-3xl">
          További modulok és integráció
        </h2>
        <p className="text-muted-foreground mt-3 max-w-2xl text-sm leading-relaxed md:text-base">
          A vizuális modulok mellett a rendszer dokumentumkezelést,
          automatizmusokat, publikus webformokat és nyílt REST API-t is biztosít
          a külső rendszerek integrációjához.
        </p>
      </div>
      <div className="grid grid-cols-1 border border-t-0 md:grid-cols-2">
        {extras.map((extra, index) => (
          <div
            key={index}
            className={cn(
              'bordered-div-padding space-y-4',
              index % 2 === 0 && 'md:border-e',
              index < extras.length - 2 && 'border-b md:border-b',
              index === 2 && 'md:border-b-0',
            )}
          >
            <div className="flex items-center gap-3">
              <h3 className="text-muted-foreground flex items-center gap-2 text-sm leading-snug font-medium md:text-base">
                <extra.icon className="size-5" />
                {extra.title}
              </h3>
              <span
                className={cn(
                  'rounded-sm border px-2 py-0.5 text-xs font-medium',
                  extra.badge === 'Alap'
                    ? 'border-primary/30 bg-primary/10 text-primary'
                    : 'border-border bg-muted/40 text-muted-foreground',
                )}
              >
                {extra.badge}
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed md:text-base">
              {extra.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
