import { Layers, ShieldCheck, Target, Users } from 'lucide-react';

const blocks = [
  {
    icon: Users,
    title: 'Kinek ajánljuk?',
    paragraphs: [
      'Kis- és középvállalkozásoknak, akik strukturált projektmenedzsmentet és ügyfél-nyilvántartást vezetnének be; szolgáltató cégeknek, ahol az email- és videókommunikációt össze kell hangolni a feladatkövetéssel; projekt-alapú szervezeteknek, ahol vizuális kanban táblák és automatizmusok optimalizálják a munkafolyamatot.',
      'És minden olyan csapatnak, amelyik több különálló eszközt szeretne lecserélni egyetlen integrált platformra.',
    ],
  },
  {
    icon: Layers,
    title: 'Moduláris felépítés',
    paragraphs: [
      'Hat alapmodul minden ügyfélnek jár — Munkaterek & Kanban, Naptár, Dokumentumkezelés, Statisztikák, Automatizmusok és Adminisztráció. Az opcionális Ügyfelek, Email kezelés, Videó találkozók és Webformok modulok igény szerint kapcsolhatók be.',
      'Csak azokért a modulokért fizetsz, amiket ténylegesen használsz.',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Biztonság és technológia',
    paragraphs: [
      'A backend Java 17 + Spring Boot 3, a frontend React 18 + TypeScript, az adatbázis PostgreSQL, a fájltárolás AWS S3, a videóhívás LiveKit (WebRTC). HTTPS titkosítás, JWT alapú hitelesítés, többszintű ACL és audit-naplózás minden adatváltozásnál.',
      'Multi-tenant elválasztás: minden ügyfél saját, izolált adatbázis-példányt kap.',
    ],
  },
  {
    icon: Target,
    title: 'Magyar nyelvű támogatás',
    paragraphs: [
      'A felület három nyelven érhető el: magyar, angol és spanyol. A támogatás és a dokumentáció magyar nyelvű, a bevezetésnél személyes konzultációval segítünk a folyamatok leképezésében és az egyedi mezők, sablonok, automatizmusok megtervezésében.',
      'Az ügyfélszolgálat a info@avorasoft.hu címen érhető el.',
    ],
  },
];

export function AboutMissionTeam() {
  return (
    <section className="container">
      <div className="grid grid-cols-1 border border-t-0 md:grid-cols-2">
        {blocks.map((block, index) => (
          <div
            key={block.title}
            className={`bordered-div-padding space-y-6 ${
              index % 2 === 0 ? 'md:border-e' : ''
            } ${index < 2 ? 'border-b' : ''}`}
          >
            <h2 className="text-muted-foreground flex items-center gap-2 text-sm leading-snug font-medium md:text-base">
              <block.icon className="size-5" />
              {block.title}
            </h2>
            {block.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-muted-foreground text-sm leading-relaxed md:text-base"
              >
                {p}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
