import { BarChart3 } from 'lucide-react';

export function Compatibility() {
  return (
    <section className="container">
      <div className="bordered-div-padding border border-t-0">
        <div className="space-y-4">
          <h3 className="text-muted-foreground flex items-center gap-2 text-sm leading-snug font-medium md:text-base">
            <BarChart3 className="size-5" />
            Statisztikák és automatizmus
          </h3>
          <h2 className="text-foreground font-weight-display leading-snug md:text-xl">
            Adatok alapján döntesz — a rendszer dolgozik helyetted.
          </h2>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2 md:gap-10">
          <p className="text-muted-foreground text-sm leading-relaxed md:text-base">
            A statisztikák modulban lekérdezés-összeállítóval készítesz
            testreszabható riportokat: szűrés, csoportosítás (darabszám, összeg,
            átlag), értékcsere, számított oszlopok. Az eredmények Excel (XLSX)
            vagy CSV formátumban exportálhatók, a lekérdezések pedig sablonként
            elmenthetők és jogosultságokkal védhetők.
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed md:text-base">
            Az Automatizmusok modul esemény-alapú flow-kat futtat a kanban
            táblán: kártya mozgatása, határidő, státusz- vagy címkeváltás
            triggerelheti az automatikus áthelyezést, címkézést, email
            értesítést, felelős-kiosztást vagy késleltetett lépést. A
            rendszeres, kézzel végzett mikrofeladatok így megszűnnek.
          </p>
        </div>
      </div>
    </section>
  );
}
