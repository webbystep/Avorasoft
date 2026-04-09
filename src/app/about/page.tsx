import { AboutHero } from '@/components/sections/about-hero';
import { AboutMissionTeam } from '@/components/sections/about-mission-team';

export default function AboutPage() {
  return (
    <div className="overflow-hidden">
      <AboutHero />
      <AboutMissionTeam />
    </div>
  );
}
