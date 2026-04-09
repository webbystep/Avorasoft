'use client';

import { ExternalLinkIcon, Github, MessageSquare } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { CopyMDXSource } from './copy-mdx-source';

interface DocsToolbarProps {
  rawMDXContent?: string | null;
}

export function DocsToolbar({ rawMDXContent }: DocsToolbarProps) {
  return (
    <div className="mb-8 flex items-center gap-4">
      <CopyMDXSource source={rawMDXContent || undefined} />

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm">
            <ExternalLinkIcon className="size-4" />
            Open
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem asChild>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="size-4" />
              Open GitHub
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a
              href="https://chatgpt.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <MessageSquare className="size-4" />
              Open ChatGPT
            </a>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
