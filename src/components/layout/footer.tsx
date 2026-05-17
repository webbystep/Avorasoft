'use client';
import {
  FileCode,
  Globe,
  LineChart,
  Lock,
  Server,
  Terminal,
  Users,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

import { Diamonds } from '@/components/icons/diamonds';
import Logo from '@/components/layout/logo';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const PAGE_THEME_COLOR = '#fcfcfc';
const FOOTER_THEME_COLOR = '#023e34';

const FEATURES = [
  {
    title: 'Alap csomag',
    description: 'Egyedi árazás',
    features: [
      {
        name: 'Felhő alapú infrastruktúra',
        icon: <Server className="size-5" />,
      },
      {
        name: 'Feladatkezelés és KanBan munkaterek',
        icon: <FileCode className="size-5" />,
      },
      {
        name: 'Munkatársak és partnerek kezelése',
        icon: <Users className="size-5" />,
      },
      {
        name: 'Naptár és eseménykezelés',
        icon: <Terminal className="size-5" />,
      },
    ],
    button: {
      text: 'Bemutató kérése',
      href: '/contact',
      variant: 'default' as const,
    },
  },
  {
    title: 'Prémium csomag',
    description: 'Egyedi árazás',
    features: [
      {
        name: 'Minden az Alap csomagból',
        icon: <Server className="size-5" />,
      },
      {
        name: 'Statisztikák és egyedi riportok',
        icon: <LineChart className="size-5" />,
      },
      {
        name: 'Jogosultsági szintek kezelése',
        icon: <Lock className="size-5" />,
      },
      {
        name: 'Céges arculathoz igazított felület',
        icon: <Globe className="size-5" />,
      },
      {
        name: 'Egyedi modulok fejlesztése',
        icon: <FileCode className="size-5" />,
      },
    ],
    button: {
      text: 'Bemutató kérése',
      href: '/contact',
      variant: 'default' as const,
    },
  },
];

const Footer = () => {
  const pathname = usePathname();
  const footerRef = useRef<HTMLElement>(null);

  const logoWordmarkClass =
    'w-[min(100%,400px)] translate-y-1/4 md:translate-y-1/3 md:h-32 md:w-full lg:h-73 opacity-10 invert';

  const hideFooter = ['/docs'].some((route) => pathname.includes(route));

  useEffect(() => {
    if (hideFooter || !footerRef.current) return;

    let meta = document.querySelector<HTMLMetaElement>(
      'meta[name="theme-color"]',
    );
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'theme-color';
      document.head.appendChild(meta);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        meta!.content = entry.isIntersecting
          ? FOOTER_THEME_COLOR
          : PAGE_THEME_COLOR;
      },
      { threshold: 0 },
    );
    observer.observe(footerRef.current);

    return () => {
      observer.disconnect();
      meta!.content = PAGE_THEME_COLOR;
    };
  }, [hideFooter]);

  if (hideFooter) return null;

  return (
    <footer
      ref={footerRef}
      className="overflow-hidden bg-foreground text-background [&_*]:border-border/30"
    >
      {/* Pricing Section */}
      <div className="container">
        <div className="bordered-div-padding border-x">
          <h2 className="lg:text-4xxl font-weight-display mt-6 text-xl md:mt-14 md:text-3xl lg:mt-40">
            Válaszd ki a neked megfelelő csomagot.
          </h2>
        </div>

        <div className="grid divide-y border md:grid-cols-2 md:divide-x md:divide-y-0">
          {FEATURES.map((plan, index) => (
            <div
              key={index}
              className={cn(
                'bordered-div-padding relative flex flex-col gap-6 md:gap-10',
              )}
            >
              {index === 1 && (
                <Diamonds className="absolute top-0 left-full -mt-0.25 hidden !h-[calc(100%+2px)] border-y md:block" />
              )}

              {index === 1 && (
                <div className="bg-secondary text-secondary-foreground absolute top-0 right-0 px-3 py-2.5 text-sm leading-none font-medium">
                  Ajánlott
                </div>
              )}
              <div>
                <h3 className="font-weight-display text-lg md:text-2xl lg:text-3xl">
                  {plan.title}
                </h3>
                <p className="font-weight-display mt-6 text-base md:text-xl">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2">
                    <span className="flex-shrink-0">{feature.icon}</span>
                    <span className="text-muted-foreground font-medium">
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                variant={plan.button.variant}
                className="mt-auto mb-0 w-fit"
              >
                <Link
                  href={plan.button.href}
                  target={
                    plan.button.href.startsWith('http') ? '_blank' : undefined
                  }
                >
                  {plan.button.text}
                </Link>
              </Button>
            </div>
          ))}
        </div>

        {/* Legal Links and Status Section */}
        <div className="flex flex-col justify-between border-x border-b md:flex-row">
          <div className="bordered-div-padding flex items-center space-x-6 text-sm">
            <Link
              href="/privacy-policy"
              className="transition-opacity hover:opacity-80"
            >
              Adatvédelmi irányelvek
            </Link>
            <span className="text-border">•</span>
            <Link
              href="/terms-of-service"
              className="transition-opacity hover:opacity-80"
            >
              Felhasználási feltételek
            </Link>
          </div>
          <div className="bordered-div-padding flex items-center border-t text-[#00A656] md:border-t-0">
            <span
              className={cn(
                'me-3 h-2 w-2 animate-pulse rounded-full bg-[#00A656]',
              )}
            ></span>
            <span className="font-medium">Minden rendszer működik</span>
          </div>
        </div>

        {/* Large Logo */}
        <Logo
          variant="wordmark"
          className="justify-center border-x"
          iconClassName="hidden"
          wordmarkClassName={logoWordmarkClass}
        />
      </div>
    </footer>
  );
};

export default Footer;
