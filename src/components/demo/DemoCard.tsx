'use client';

import { ReactNode } from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';

type DemoCardProps = {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
  statusBadge?: ReactNode;
  titleClassName?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const DemoCard = ({
  title,
  description,
  children,
  className,
  statusBadge,
  titleClassName,
  ...props
}: DemoCardProps) => {
  return (
    <Card className={cn('transition-colors', className)} {...props}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className={cn('text-lg', titleClassName)}>
            {title}
          </CardTitle>
          {statusBadge}
        </div>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default DemoCard;
