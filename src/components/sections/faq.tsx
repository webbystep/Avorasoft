'use client';

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

import { Meteors } from '@/components/magicui/meteors';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

type Category =
  | 'Általános'
  | 'Modulok'
  | 'Biztonság és technológia'
  | 'Integráció és támogatás';

const categories: Category[] = [
  'Általános',
  'Modulok',
  'Biztonság és technológia',
  'Integráció és támogatás',
];

type FAQ = {
  question: string;
  answer: React.ReactNode;
};

const faqs: Record<Category, FAQ[]> = {
  'Általános': [
    {
      question: 'Mi az az Avorasoft CRM?',
      answer:
        'Az Avorasoft CRM egy modern, webalapú ügyfélkapcsolat- és projektmenedzsment rendszer, amelyet az Avora Solutions Kft. fejleszt és üzemeltet. Egyetlen integrált platformon biztosítja a feladatkezelést, ügyfélkommunikációt, dokumentumkezelést és csapatmunkát.',
    },
    {
      question: 'SaaS modellben működik? Kell hozzá telepítés?',
      answer:
        'Igen, SaaS modellben működik. Nincs telepítés, nincs szerver-karbantartás. Minden ügyfél saját, elkülönített példányt kap saját aldomain-nel (pl. cegnev.avorasoft.hu), így az adatok teljes mértékben szeparáltak. Böngészőből bármilyen modern eszközről (asztali gép, laptop, tablet) használható.',
    },
    {
      question: 'Kinek ajánljuk?',
      answer:
        'Kis- és középvállalkozásoknak, szolgáltató cégeknek (ahol email- és videókommunikációt kell összehangolni a feladatkövetéssel), projekt-alapú szervezeteknek (kanban + automatizmus), és minden olyan csapatnak, amelyik több különálló eszközt szeretne lecserélni egyetlen integrált platformra.',
    },
    {
      question: 'Milyen nyelveken érhető el?',
      answer:
        'A felület három nyelven elérhető: magyar, angol és spanyol. A nyelv bármikor váltható a felső eszköztár zászló ikonján — a váltás azonnal érvénybe lép, oldalt sem kell újratölteni. A választott nyelv a böngészőben mentésre kerül.',
    },
  ],
  'Modulok': [
    {
      question: 'Milyen modulokat tartalmaz a rendszer?',
      answer:
        'Hat alapmodul minden ügyfélnek jár: Munkaterek & Kanban, Naptár, Dokumentumkezelés, Statisztikák, Automatizmusok és Adminisztráció. Opcionálisan bekapcsolható az Ügyfelek, az Email kezelés, a Videó találkozók és a Webformok modul. Az External API alap szolgáltatás.',
    },
    {
      question: 'Hogyan épül fel a kanban hierarchia?',
      answer:
        'Munkaterület → Csoport → Kanban tábla → Lista (oszlop) → Kártya (feladat). A kártyák drag & drop módszerrel mozgathatók listák és táblák között. A jogosultságok hierarchikusan öröklődnek a szinteken keresztül.',
    },
    {
      question: 'Mit tudnak a beépített videó találkozók?',
      answer:
        'A találkozók megjelennek a CRM naptárában, vendégek e-mail meghívóval, regisztráció és alkalmazás-telepítés nélkül csatlakoznak. Hang és videó (eszközválasztással), képernyőmegosztás, szöveges chat, résztvevő-lista. A hívás közvetlenül a kanban kártyáról is indítható — nem kell Zoom, Teams vagy Meet.',
    },
    {
      question: 'Milyen automatizmusok állíthatók be?',
      answer:
        'Triggerek: kártya létrehozása/mozgatása/törlése, határidő elérése, státusz- vagy címkeváltás, felelős-módosítás. Akciók: áthelyezés, címke- és státuszbeállítás, email értesítés, feladat-kiosztás, késleltetés. Tipikus példa: ha egy kártya a „Kész" listába kerül, a státusz automatikusan „Lezárt" lesz, email értesítés megy a projektvezetőnek, 7 nap múlva pedig a kártya az „Archívum" listába kerül.',
    },
  ],
  'Biztonság és technológia': [
    {
      question: 'Milyen technológiákra épül a rendszer?',
      answer:
        'Backend: Java 17, Spring Boot 3. Frontend: React 18, TypeScript, Tailwind CSS. Adatbázis: PostgreSQL. Cache: Redis. Fájltárolás: AWS S3. Email: AWS SES. Videóhívás: LiveKit (WebRTC). Üzemeltetés Docker konténerekben, Nginx reverse proxy mögött, Cloudflare DNS-sel.',
    },
    {
      question: 'Hogyan biztonságos az adat?',
      answer:
        'HTTPS titkosítás minden kommunikációhoz, JWT alapú hitelesítés, többszintű jogosultságkezelés (ACL), multi-tenant elválasztás (elkülönített adatbázis-példányok), audit naplózás minden adatváltozásnál, AWS infrastruktúra ipari szintű megbízhatósággal.',
    },
    {
      question: 'Milyen jogosultsági szinteket támogat?',
      answer:
        'Kanban tábla szinten 14 különböző jogosultság, munkaterület szinten olvasás/létrehozás/módosítás/törlés/duplikálás, mappánként háromszintű hozzáférés, egyedi mezőnként olvasás és szerkesztés. A szerepkörök (biztonsági csoportok) lehetővé teszik a felhasználók egységes kezelését.',
    },
    {
      question: 'Milyen böngészőket támogat? Mi a rendszerkövetelmény?',
      answer:
        'Chrome, Firefox, Edge, Safari (legutóbbi 2 verzió). Ajánlott felbontás: 1366 × 768 pixel vagy nagyobb. Nincs OS- vagy alkalmazás-telepítési követelmény — bármilyen modern eszközről használható.',
    },
  ],
  'Integráció és támogatás': [
    {
      question: 'Van REST API a külső rendszer integrációhoz?',
      answer:
        'Igen. Az External API lehetővé teszi kanban feladatok létrehozását, egyedi mezők és fájlfeltöltés kezelését, ügyfél-rekordok (cég és személy) létrehozását, valamint webform-válaszok beküldését. Hitelesítés: App Integration Token (a webformoknál nem szükséges). A teljes OpenAPI/Swagger specifikáció elérhető az üzemeltetőtől.',
    },
    {
      question: 'Tipikus integrációs forgatókönyvek?',
      answer:
        'Webshop → CRM: automatikus feladat- és ügyfél-létrehozás. ERP → CRM: ügyféladatok szinkronizálása. Marketing platform → CRM: webform-válaszok feldolgozása. Egyedi alkalmazás: fájlfeltöltés, egyedi mező frissítés.',
    },
    {
      question: 'Hogyan kérhetek bemutatót?',
      answer:
        'Lépj kapcsolatba velünk e-mailben az info@avorasoft.hu címen vagy telefonon a +36 20 351 6383 számon. Szívesen bemutatjuk a rendszert élesben, és segítünk megtervezni a céged folyamataira illeszkedő modul-összeállítást.',
    },
    {
      question: 'Milyen támogatást kapok a bevezetés során?',
      answer:
        'A bevezetésnél személyes konzultációval segítünk a folyamatok leképezésében és az egyedi mezők, sablonok, automatizmusok megtervezésében. A folyamatos technikai support magyar nyelven elérhető a info@avorasoft.hu címen.',
    },
  ],
};

export function FAQSection() {
  const [activeTab, setActiveTab] = useState<Category>(categories[0]);

  return (
    <section className="overflow-hidden">
      <div className="container divide-y">
        <div className="hidden border-x border-b-0 p-7.5 md:block" />

        <div className="bordered-div-padding border-x">
          <h1 className="font-weight-display text-2xl leading-snug tracking-tighter md:text-3xl lg:text-5xl">
            Gyakori kérdések
          </h1>
          <div className="mt-6 block md:hidden">
            <Select
              value={activeTab}
              onValueChange={(value) => setActiveTab(value as Category)}
            >
              <SelectTrigger className="w-full">
                <SelectValue>{activeTab}</SelectValue>
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="bordered-div-padding relative hidden border-x md:block">
          <div className="absolute left-full h-[150%] w-[50vw] -translate-y-[90%] overflow-hidden border-y">
            <Meteors
              number={1000}
              angle={65}
              maxDuration={20}
              minDuration={5}
              className="opacity-10 [&>div]:opacity-10"
            />
          </div>
          <Tabs
            value={activeTab}
            onValueChange={(value) => setActiveTab(value as Category)}
            className=""
          >
            <TabsList className="flex gap-3">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category}>
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <div className="border-x">
          <Accordion type="single" collapsible>
            {faqs[activeTab].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="bordered-div-padding font-weight-display flex w-full items-center justify-between !pb-4 text-base hover:no-underline md:!pb-6 md:text-xl [&>svg]:hidden [&[data-state=open]_svg]:rotate-180">
                  <span>{faq.question}</span>
                  <div className="bg-card flex size-8 items-center justify-center rounded-sm border">
                    <ChevronDown className="size-5 shrink-0 tracking-tight transition-transform duration-200" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground bordered-div-padding max-w-2xl !pt-0 leading-relaxed tracking-tight">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="hidden border-x p-20 md:block" />
      </div>
    </section>
  );
}
