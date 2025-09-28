'use client';

import { ReactNode } from 'react';

import { cn } from '@/lib/utils';

type DemoLayoutProps = {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

const DemoLayout = ({
  title,
  description,
  children,
  className,
}: DemoLayoutProps) => {
  return (
    <div className={cn('max-w-5xl p-3 mx-auto', className)}>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-foreground mb-2">{title}</h1>

        {description && (
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        )}
      </div>

      {children}
    </div>
  );
};

export default DemoLayout;
