import { Metadata } from 'next';

import { ContactSection } from '@/components/sections/contact';

export const metadata: Metadata = {
  title: 'Kapcsolat | Avorasoft CRM',
  description:
    'Lépj kapcsolatba az Avorasoft csapatával. Kérj bemutatót a CRM szoftverről!',
};

export default function ContactPage() {
  return <ContactSection />;
}
