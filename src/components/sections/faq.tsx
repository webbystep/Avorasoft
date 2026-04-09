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
  | 'Testreszabás'
  | 'Támogatás';

const categories: Category[] = [
  'Általános',
  'Modulok',
  'Testreszabás',
  'Támogatás',
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
        'Az Avorasoft CRM egy felhő alapú ügyfélkapcsolat-kezelő szoftver, amelyet a vállalkozásod igényei szerint alakítunk. Nem egy dobozos megoldás — kizárólag azokat a modulokat aktiváljuk, amikre szükséged van.',
    },
    {
      question: 'Hogyan férhetek hozzá a rendszerhez?',
      answer:
        'A felhőalapú működésnek köszönhetően bárhonnan, bármikor hozzáférhetsz az adatokhoz — számítógépről, tabletről vagy mobiltelefonról. A hatékony munka többé nincs helyhez kötve.',
    },
    {
      question: 'Kinek ajánlott az Avorasoft CRM?',
      answer:
        'Minden olyan vállalkozásnak, aki szeretné átláthatóbbá tenni a belső folyamatait, nyomon követni az ügyfeleit és a csapat munkáját. Kis- és középvállalkozások számára ideális megoldás.',
    },
  ],
  'Modulok': [
    {
      question: 'Milyen modulokat tartalmaz a rendszer?',
      answer:
        'A rendszer főbb moduljai: Feladatok, Munkaterek (KanBan), Munkatársak, Partnerek, Naptár és Statisztika. Minden modul személyre szabható a céged igényei szerint.',
    },
    {
      question: 'Mi az a KanBan tábla?',
      answer:
        'A KanBan tábla egy vizuális eszköz, amely nyomon követhetővé teszi a gyártást, fejlesztést és a szolgáltatói projekteket. Mérhetővé és szabályozhatóvá teszi a munkafolyamatokat.',
    },
    {
      question: 'Hogyan működik a Partnerek modul?',
      answer:
        'A Partnerek modulban nyomon követheted az aktuális projekteket, amiket külsős cégekkel együtt végzel. Láthatod, hogy egy adott partnernél hány projekt fut és mennyi munkatárs van hozzárendelve.',
    },
  ],
  'Testreszabás': [
    {
      question: 'Mennyire szabható testre a rendszer?',
      answer:
        'Teljesen. A modulokat a céged igényei szerint alakítjuk, az arculatodhoz illően. Egyedi modulok fejlesztésével is támogatjuk a munkafolyamataid leegyszerűsítését.',
    },
    {
      question: 'Készíthetek egyedi riportokat?',
      answer:
        'Igen, a Statisztika modulban részletes, egyedi lekérdezéseket készíthetsz. A korábbi lekérdezések elmenthetők és újra felhasználhatók, így időt takaríthatsz meg.',
    },
  ],
  'Támogatás': [
    {
      question: 'Hogyan kérhetek bemutatót?',
      answer:
        'Lépj kapcsolatba velünk e-mailben az info@avorasoft.hu címen vagy telefonon a (+36) 20 351 6383 számon. Szívesen bemutatjuk a rendszert!',
    },
    {
      question: 'Milyen támogatást kapok a bevezetés során?',
      answer:
        'Teljes körű támogatást biztosítunk a bevezetés során: rendszer beállítás, adatmigráció, oktatás és folyamatos technikai support.',
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
