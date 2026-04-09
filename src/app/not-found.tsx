import { Home, Mail } from 'lucide-react';
import Link from 'next/link';

import { Meteors } from '@/components/magicui/meteors';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <section className="container">
      <div className="border-x">
        <div className="bordered-div-padding flex flex-col items-center space-y-6 md:space-y-8 lg:space-y-12 lg:!py-25">
          <Badge variant="outline" className="gap-2 py-1.25 text-sm">
            <div className="bg-secondary size-2 rounded-full"></div>
            404 hiba
          </Badge>

          <h1 className="font-weight-display text-2xl leading-snug tracking-tighter md:text-3xl lg:text-5xl">
            Az oldal nem található
          </h1>

          <p className="text-muted-foreground mx-auto max-w-[700px] text-center text-sm leading-relaxed md:text-lg lg:text-xl">
            A keresett oldal nem létezik vagy áthelyezésre került.
          </p>

          <div className="flex gap-4 pt-4">
            <Link href="/">
              <Button className="h-10">
                <Home className="size-4 md:size-5" />
                Főoldal
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="h-10">
                <Mail className="size-4 md:size-5" />
                Kapcsolat
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="relative hidden overflow-hidden border-x border-t p-12 md:block md:p-20">
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
