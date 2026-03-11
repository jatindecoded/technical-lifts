import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function SectionWrapper({ children, className, id }: SectionWrapperProps) {
  return (
    <section id={id} className={cn('py-section max-w-container mx-auto px-4 sm:px-6 lg:px-8', className)}>
      {children}
    </section>
  );
}
