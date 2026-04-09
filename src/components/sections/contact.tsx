'use client';

import { Mail, Phone, Send } from 'lucide-react';
import { useState } from 'react';

import { PlusSigns } from '@/components/icons/plus-signs';
import { Meteors } from '@/components/magicui/meteors';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const contactOptions = [
  {
    icon: Mail,
    title: 'E-mail',
    description: 'info@avorasoft.hu',
    href: 'mailto:info@avorasoft.hu',
  },
  {
    icon: Phone,
    title: 'Telefon',
    description: '(+36) 20 351 6383',
    href: 'tel:+36203516383',
  },
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="container">
      <div className="hidden border border-t-0 p-7.5 md:block" />

      <div className="grid grid-cols-1 items-start divide-y border-x md:grid-cols-2 md:divide-x md:divide-y-0">
        {/* Left Side - Contact Info */}
        <div className="divide-y">
          <div className="bordered-div-padding relative space-y-6 md:space-y-8 lg:space-y-10">
            <PlusSigns className="absolute inset-0 -mt-0.25 hidden !h-[calc(100%+2px)] -translate-x-full border-y md:block" />
            <h1 className="font-weight-display text-2xl leading-snug tracking-tighter md:text-3xl lg:text-5xl">
              Készen állsz, hogy szintet lépj a vállalkozásodban?
            </h1>
            <p className="text-muted-foreground max-w-[700px] text-sm leading-relaxed md:text-lg lg:text-xl">
              Vegyél búcsút a kaotikus Excel-tábláktól és az átláthatatlan
              információáradattól! Az Avorasoft-tal egyszerűen és átláthatóan
              kezelheted ügyfeleidet, projektjeidet és csapataid munkáját.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed md:text-base">
              Lépj kapcsolatba velünk még ma, és kérj bemutatót a szoftverről!
              Ne hagyd ki a lehetőséget, hogy az Avorasoft a Te vállalkozásod
              sikerének motorja legyen!
            </p>
          </div>
          {contactOptions.map((option, index) => (
            <a
              key={index}
              href={option.href}
              className="bordered-div-padding hover:bg-muted/30 dark:hover:bg-muted transition-color flex items-center gap-3"
            >
              <option.icon className="size-10 shrink-0 p-2.5" />
              <div>
                <h3 className="text-secondary font-medium">{option.title}</h3>
                <p className="text-muted-foreground mt-1 text-sm">
                  {option.description}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Right Side - Contact Form */}
        <div className="bordered-div-padding">
          {submitted ? (
            <div className="flex flex-col items-center justify-center gap-4 py-20">
              <div className="bg-primary/10 text-primary flex size-16 items-center justify-center rounded-full">
                <Send className="size-7" />
              </div>
              <h3 className="font-weight-display text-xl md:text-2xl">
                Köszönjük!
              </h3>
              <p className="text-muted-foreground text-center text-sm md:text-base">
                Üzeneted megérkezett. Hamarosan felvesszük veled a kapcsolatot!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h2 className="font-weight-display text-lg md:text-xl">
                Kérj bemutatót
              </h2>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Név *</Label>
                  <Input
                    id="name"
                    required
                    placeholder="Teljes neved"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">E-mail *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder="email@ceg.hu"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Cégnév</Label>
                  <Input
                    id="company"
                    placeholder="Céged neve"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Telefonszám</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+36 20 123 4567"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Üzenet *</Label>
                  <textarea
                    id="message"
                    required
                    placeholder="Írd le, miben segíthetünk..."
                    rows={4}
                    className="border-input bg-background placeholder:text-muted-foreground focus-visible:ring-ring flex w-full rounded-md border px-3 py-2 text-sm focus-visible:ring-1 focus-visible:outline-none"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>
              </div>

              <Button type="submit" className="w-full">
                Üzenet küldése
              </Button>
            </form>
          )}
        </div>
      </div>
      <div className="relative hidden overflow-hidden border-x border-t p-20 md:block">
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
