import { Compatibility } from '@/components/sections/compatibility';
import { Features } from '@/components/sections/features';
import { Hero } from '@/components/sections/hero';
import { SocialProof } from '@/components/sections/social-proof';

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <SocialProof />
      <Features />
      <Compatibility />
    </div>
  );
}
