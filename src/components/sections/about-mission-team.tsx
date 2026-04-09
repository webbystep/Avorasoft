import { Heart, Users } from 'lucide-react';

export function AboutMissionTeam() {
  return (
    <section className="container">
      <div className="grid grid-cols-1 divide-y border border-t-0 md:grid-cols-2 md:divide-x md:divide-y-0">
        {/* Mission Section */}
        <div className="bordered-div-padding space-y-8">
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-muted-foreground flex items-center gap-2 text-sm leading-snug font-medium md:text-base">
              <Heart className="size-5" />
              Küldetésünk
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed md:text-base">
              <span className="text-foreground font-medium">
                Az Avorasoft célja, hogy minden interakciót lehetőséggé alakítson.
              </span>{' '}
              Támogatjuk az értékesítési folyamatokat, javítjuk a csapatok
              közötti együttműködést és hozzájárulunk a vállalkozások hosszú távú
              növekedéséhez.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed md:text-base">
              A felhőalapú működésnek köszönhetően bárhonnan, bármikor
              hozzáférhetsz az adatokhoz, így a{' '}
              <span className="text-foreground font-medium">
                hatékony munka többé nincs helyhez kötve
              </span>
              .
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="bordered-div-padding relative space-y-8">
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-muted-foreground flex items-center gap-2 text-sm leading-snug font-medium md:text-base">
              <Users className="size-5" />
              Csapatunk
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed md:text-base">
              Mi hisszük, hogy a csapatmunkában van az erő és a szoftver minden
              egyes funkciója ezt támogatja. Emeld új szintre csapatod
              teljesítményét az Avorasoft CRM segítségével.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed md:text-base">
              Fokozd a csapatod hatékonyságát egy olyan rendszerrel, ami a céged
              igényeihez igazodik — nem fordítva.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
