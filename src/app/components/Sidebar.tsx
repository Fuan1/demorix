'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/app/lib/utils';
import type { NavigationCategory } from '@/app/types/navigation';

type SidebarProps = {
  categories: NavigationCategory[];
};

const Sidebar = ({ categories }: SidebarProps) => {
  const pathname = usePathname();

  return (
    <aside className="w-[280px] h-screen bg-secondary border-r border-border overflow-y-auto fixed left-0 top-0">
      <div className="p-6 border-b border-border">
        <h1 className="text-xl font-semibold text-foreground m-0">Demorix</h1>
      </div>

      {categories.map(category => (
        <div key={category.id} className="py-4">
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide m-0 mb-2 px-6">
            {category.title}
          </h2>
          {category.items.map(item => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.id}
                href={item.path}
                className={cn(
                  'block py-2 px-6 text-foreground no-underline transition-all border-l-[3px]',
                  isActive
                    ? 'text-primary bg-blue-50 font-medium border-l-primary'
                    : 'border-l-transparent font-normal hover:bg-secondary hover:text-primary'
                )}
              >
                {item.title}
                {item.description && (
                  <div className="text-xs text-muted-foreground mt-1">
                    {item.description}
                  </div>
                )}
              </Link>
            );
          })}
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
