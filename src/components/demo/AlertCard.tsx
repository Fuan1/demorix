'use client';

import { AlertCircle, Info, AlertTriangle, CheckCircle } from 'lucide-react';
import { ReactNode } from 'react';

import { cn } from '@/lib/utils';

type AlertType = 'info' | 'warning' | 'error' | 'success';

type AlertCardProps = {
  type: AlertType;
  title: string;
  children: ReactNode;
  className?: string;
};

const alertConfig = {
  info: {
    icon: Info,
    bgColor: 'bg-blue-50 border-blue-200',
    iconColor: 'text-blue-600',
    titleColor: 'text-blue-900',
    textColor: 'text-blue-800',
  },
  warning: {
    icon: AlertTriangle,
    bgColor: 'bg-yellow-50 border-yellow-200',
    iconColor: 'text-yellow-600',
    titleColor: 'text-yellow-900',
    textColor: 'text-yellow-800',
  },
  error: {
    icon: AlertCircle,
    bgColor: 'bg-red-50 border-red-200',
    iconColor: 'text-red-600',
    titleColor: 'text-red-900',
    textColor: 'text-red-800',
  },
  success: {
    icon: CheckCircle,
    bgColor: 'bg-green-50 border-green-200',
    iconColor: 'text-green-600',
    titleColor: 'text-green-900',
    textColor: 'text-green-800',
  },
};

const AlertCard = ({ type, title, children, className }: AlertCardProps) => {
  const config = alertConfig[type];
  const Icon = config.icon;

  return (
    <div
      className={cn(
        'border rounded-lg p-4',
        config.bgColor,
        className
      )}
    >
      <div className="flex gap-3">
        <Icon className={cn('w-5 h-5 flex-shrink-0 mt-0.5', config.iconColor)} />
        <div className="flex-1">
          <h3 className={cn('font-medium text-sm mb-1', config.titleColor)}>
            {title}
          </h3>
          <div className={cn('text-sm', config.textColor)}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertCard;