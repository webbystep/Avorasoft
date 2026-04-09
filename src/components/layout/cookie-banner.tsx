'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className={cn(
        'fixed bottom-0 left-0 right-0 z-50 border-t bg-background/95 backdrop-blur-sm',
        'animate-in slide-in-from-bottom duration-500',
      )}
    >
      <div className="container flex flex-col items-center gap-4 px-4 py-4 sm:flex-row sm:justify-between">
        <p className="text-muted-foreground text-sm leading-relaxed">
          Weboldalunk cookie-kat használ a felhasználói élmény javítása
          érdekében. További információ az{' '}
          <Link
            href="/privacy-policy"
            className="text-foreground underline hover:no-underline"
          >
            Adatvédelmi irányelveinkben
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-2">
          <Button variant="outline" size="sm" onClick={handleDecline}>
            Elutasítom
          </Button>
          <Button size="sm" onClick={handleAccept}>
            Elfogadom
          </Button>
        </div>
      </div>
    </div>
  );
}
