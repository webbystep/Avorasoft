import { BarChart3 } from 'lucide-react';

import { Meteors } from '@/components/magicui/meteors';

export function Compatibility() {
  return (
    <section className="container">
      <div className="bordered-div-padding border border-t-0">
        <div className="space-y-4">
          <h3 className="text-muted-foreground flex items-center gap-2 text-sm leading-snug font-medium md:text-base">
            <BarChart3 className="size-5" />
            Statisztika
          </h3>
          <h2 className="text-foreground font-weight-display leading-snug md:text-xl">
            Az adat a lényeg...
          </h2>
        </div>

        <div className="mt-6">
          <p className="text-muted-foreground text-sm leading-relaxed md:text-base max-w-3xl">
            A statisztikák modulban részletes lekérdezéseket készíthetsz az
            adataidból, így pontos képet kapsz a vállalkozásod
            teljesítményéről. Könnyedén összeállíthatsz egyedi riportokat a
            leadekről, ajánlatokról, partnerekről vagy projektek állapotáról. A
            modul lehetőséget ad szűrések, feltételek és értékcserék
            beállítására, így az elemzések teljes mértékben a saját igényeidhez
            igazíthatók. A korábbi lekérdezések elmenthetők és újra
            felhasználhatók, így időt takaríthatsz meg a rendszeres riportok
            elkészítésekor.
          </p>
        </div>
      </div>
      <div className="relative hidden overflow-hidden border-x border-b p-20 md:block" style={{ contain: 'paint' }}>
        <Meteors
          number={1000}
          angle={65}
          maxDuration={20}
          minDuration={5}
          className="opacity-10 [&>div]:opacity-10"
        />
      </div>
    </section>
  );
}
