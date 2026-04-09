'use client';

import { Copy } from 'lucide-react';
import { useState } from 'react';

import { Button } from './ui/button';

interface CopyMDXSourceProps {
  source?: string;
  className?: string;
}

export function CopyMDXSource({ source, className }: CopyMDXSourceProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (copied || !source) return;

    try {
      await navigator.clipboard.writeText(source);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy MDX source: ', err);
    }
  };

  if (!source) {
    return null;
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleCopy}
      className={className}
    >
      <Copy className="size-4" />
      {copied ? 'Copied!' : 'Copy Markdown'}
    </Button>
  );
}
