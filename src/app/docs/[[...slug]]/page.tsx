import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';

import { DocsToolbar } from '@/components/docs-toolbar';
import { getMDXComponents } from '@/components/mdx-components';
import { getMDXSourceForCopy } from '@/lib/get-raw-mdx';
import { source } from '@/lib/source';

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;

  // Get raw MDX content for copy functionality
  const filePath =
    !params.slug || params.slug.length === 0
      ? 'index.mdx'
      : `${params.slug?.join('/')}.mdx`;
  const rawMDXContent = getMDXSourceForCopy(filePath);

  return (
    <DocsPage
      toc={page.data.toc}
      full={page.data.full}
      tableOfContent={{
        style: 'clerk',
      }}
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription className="mb-0">
        {page.data.description}
      </DocsDescription>
      <DocsToolbar rawMDXContent={rawMDXContent} />
      <DocsBody>
        <MDX components={getMDXComponents()} />
      </DocsBody>
    </DocsPage>
  );
}

export const dynamic = 'force-dynamic';

export function generateStaticParams() {
  return [];
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
