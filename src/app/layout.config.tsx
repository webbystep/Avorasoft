import { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

import Logo from '@/components/layout/logo';

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <Logo
        className="ps-6 transition-all duration-300 lg:ps-0"
        noLink
      />
    ),
  },
};
