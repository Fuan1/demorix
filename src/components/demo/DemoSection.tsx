'use client';

import { ReactNode } from 'react';

import { cn } from '@/lib/utils';

type DemoSectionProps = {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

const DemoSection = ({ title, description, children, className }: DemoSectionProps) => {
  return (
    <div className={cn("mb-8", className)}>
      <div className="mb-4">
        <h2 className="text-lg font-medium text-foreground mb-2">
          {title}
        </h2>

        {description && (
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        )}
      </div>

      <div className="rounded-lg border bg-card p-4">
        {children}
      </div>
    </div>
  );
};

export default DemoSection;