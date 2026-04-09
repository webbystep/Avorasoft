import { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

import Logo from '@/components/layout/logo';
import { cn } from '@/lib/utils';

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <Logo
        className={cn(
          'ps-6 transition-all duration-300 lg:ps-0',
          'dark:[&>img]:invert',
        )}
        noLink
      />
    ),
  },
};
