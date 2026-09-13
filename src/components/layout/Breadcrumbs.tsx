import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { PageRoute } from '../../types';

interface BreadcrumbItem {
  label: string;
  route?: PageRoute;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  navigate: (route: PageRoute) => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, navigate }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <ol className="flex items-center space-x-2 text-xs text-slate-500 flex-wrap">
        <li>
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-1 hover:text-[#0D5EA8] transition-colors cursor-pointer"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
        </li>
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={idx} className="flex items-center space-x-2">
              <ChevronRight className="w-3.5 h-3.5 text-slate-300 stroke-[2.5]" />
              {isLast || !item.route ? (
                <span className="font-semibold text-slate-900 truncate max-w-[200px] sm:max-w-none">
                  {item.label}
                </span>
              ) : (
                <button
                  onClick={() => item.route && navigate(item.route)}
                  className="hover:text-[#0D5EA8] transition-colors cursor-pointer"
                >
                  {item.label}
                </button>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
