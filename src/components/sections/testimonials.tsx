import { Verified } from 'lucide-react';

export function Testimonials() {
  return (
    <section className="container">
      <div className="bordered-div-padding border border-t-0">
        <h2 className="text-muted-foreground flex items-center gap-2 text-sm leading-snug font-medium md:text-base">
          <Verified className="size-5" />
          A szoftverről
        </h2>
      </div>
      <blockquote className="bordered-div-padding flex flex-col justify-between gap-8 border border-t-0 md:flex-row">
        <div className="flex-7 space-y-4">
          <p className="lg:text-4xxl font-weight-display text-2xl leading-snug tracking-tighter md:text-3xl">
            Egységes platform — moduláris pricinggal.
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed md:text-base">
            Nem kell több szoftver között váltogatnod, és csak azokat a
            modulokat aktiváljuk, amikre ténylegesen szükséged van. SaaS
            modellben működik: nincs telepítés, nincs szerver-karbantartás, a
            szervezeted saját aldomain-en (pl. cegnev.avorasoft.hu) éri el a
            rendszert, az adatok teljes mértékben elkülönítve tárolódnak.
          </p>
        </div>

        <div className="flex-6 self-end space-y-4">
          <p className="font-weight-display text-lg leading-snug md:text-xl">
            Bevált technológiák, ipari szintű biztonság.
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed md:text-base">
            Java 17 + Spring Boot backend, React 18 frontend, PostgreSQL
            adatbázis, AWS S3 fájltárolás és LiveKit videóhívás. HTTPS
            titkosítás, JWT alapú hitelesítés, többszintű ACL és audit-naplózás
            minden adatváltozásnál. Magyar, angol és spanyol nyelvű felület.
          </p>
        </div>
      </blockquote>
    </section>
  );
}
