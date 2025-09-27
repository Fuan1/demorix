'use client';

import { ReactNode } from 'react';

import Sidebar from '@/app/components/Sidebar';
import { navigationCategories } from '@/app/constants/navigation';

type AppLayoutProps = {
  children: ReactNode;
};

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="flex h-full overflow-hidden">
      <Sidebar categories={navigationCategories} />
      <main className="ml-[280px] flex-1 p-6 overflow-y-auto h-screen">
        {children}
      </main>
    </div>
  );
};

export default AppLayout;
