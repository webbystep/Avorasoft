import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

interface LogoProps {
  iconClassName?: string;
  wordmarkClassName?: string;
  className?: string;
  href?: string;
  noLink?: boolean;
  variant?: 'brand' | 'wordmark';
  forceDark?: boolean;
}

export default function Logo({
  iconClassName,
  wordmarkClassName,
  className,
  href = '/',
  noLink,
  variant = 'brand',
  forceDark,
}: LogoProps) {
  const Element = noLink ? 'div' : Link;

  if (variant === 'wordmark') {
    return (
      <Element href={href} className={cn('flex items-center gap-2.5', className)}>
        <Image
          src="/layout/logo-icon.svg"
          alt="Avorasoft Logo"
          width={22}
          height={24}
          className={cn('object-contain', iconClassName)}
        />
        <Image
          src="/layout/logo-wordmark.svg"
          alt="Avorasoft"
          width={51.353}
          height={14.009}
          className={cn('object-contain', wordmarkClassName)}
        />
      </Element>
    );
  }

  if (forceDark !== undefined) {
    return (
      <Element href={href} className={cn('flex items-center', className)}>
        <Image
          src={forceDark ? '/layout/avorasoft-logo-dark.svg' : '/layout/avorasoft-logo-light.svg'}
          alt="Avorasoft"
          width={100}
          height={40}
          className="object-contain"
        />
      </Element>
    );
  }

  return (
    <Element href={href} className={cn('flex items-center', className)}>
      <Image
        src="/layout/avorasoft-logo-light.svg"
        alt="Avorasoft"
        width={100}
        height={40}
        className="object-contain dark:hidden"
      />
      <Image
        src="/layout/avorasoft-logo-dark.svg"
        alt="Avorasoft"
        width={100}
        height={40}
        className="hidden object-contain dark:block"
      />
    </Element>
  );
}
