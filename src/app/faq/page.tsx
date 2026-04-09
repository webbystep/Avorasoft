import { Metadata } from 'next';

import { FAQSection } from '@/components/sections/faq';

export const metadata: Metadata = {
  title: 'Gyakori kérdések - Avorasoft CRM',
  description: 'Gyakran ismételt kérdések az Avorasoft CRM-ről',
};

export default function FAQPage() {
  return <FAQSection />;
}
