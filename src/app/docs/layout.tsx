import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import {
  SiAstro,
  SiNextdotjs,
  SiNuxtdotjs,
  SiReact,
  SiSvelte,
} from 'react-icons/si';

import { baseOptions } from '@/app/layout.config';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { source } from '@/lib/source';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      {...baseOptions}
      sidebar={{
        banner: (
          <Select defaultValue="nextjs">
            <SelectTrigger className="w-full rounded-md shadow-none">
              <SelectValue placeholder="Select framework" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="nextjs">
                <div className="flex items-center gap-2">
                  <SiNextdotjs className="size-4 text-[#000000]" />
                  <span>Next.js</span>
                </div>
              </SelectItem>
              <SelectItem value="nuxtjs">
                <div className="flex items-center gap-2">
                  <SiNuxtdotjs className="size-4 text-[#00DC82]" />
                  <span>Nuxt.js</span>
                </div>
              </SelectItem>
              <SelectItem value="sveltekit">
                <div className="flex items-center gap-2">
                  <SiSvelte className="size-4 text-[#FF3E00]" />
                  <span>SvelteKit</span>
                </div>
              </SelectItem>
              <SelectItem value="astro">
                <div className="flex items-center gap-2">
                  <SiAstro className="size-4 text-[#FF5D01]" />
                  <span>Astro</span>
                </div>
              </SelectItem>
              <SelectItem value="react">
                <div className="flex items-center gap-2">
                  <SiReact className="size-4 text-[#61DAFB]" />
                  <span>React</span>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        ),
      }}
    >
      {children}
    </DocsLayout>
  );
}
