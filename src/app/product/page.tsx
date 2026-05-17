import { ProductCta } from '@/components/sections/product-cta';
import { ProductExtras } from '@/components/sections/product-extras';
import { ProductFeatures } from '@/components/sections/product-features';
import { ProductHero } from '@/components/sections/product-hero';

export default function ProductPage() {
  return (
    <>
      <ProductHero />
      <ProductFeatures />
      <ProductExtras />
      <ProductCta />
    </>
  );
}
