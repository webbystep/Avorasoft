import { cn } from '@/lib/utils';

interface BrowserFrameProps {
  url?: string;
  children: React.ReactNode;
  className?: string;
}

export function BrowserFrame({ url, children, className }: BrowserFrameProps) {
  return (
    <div
      className={cn(
        'border-border bg-card overflow-hidden rounded-xl border shadow-2xl shadow-foreground/15',
        className,
      )}
    >
      <div className="border-border bg-muted/40 flex items-center gap-3 border-b px-3 py-2.5 md:px-4 md:py-3">
        <div className="flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-[#FF5F57] md:size-2.5" />
          <span className="size-2 rounded-full bg-[#FEBC2E] md:size-2.5" />
          <span className="size-2 rounded-full bg-[#28C840] md:size-2.5" />
        </div>
        {url && (
          <div className="border-border/60 bg-background/70 text-muted-foreground mx-auto flex max-w-sm flex-1 items-center justify-center truncate rounded-md border px-3 py-0.5 text-[10px] md:max-w-md md:py-1 md:text-xs">
            {url}
          </div>
        )}
      </div>
      <div className="bg-background">{children}</div>
    </div>
  );
}
