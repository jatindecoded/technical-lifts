'use client';

import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { SITE, NAV_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark border-b border-border">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="/" className="font-heading text-xl font-bold text-primary tracking-tight">
          {SITE.name}
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8 list-none m-0 p-0">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-text-muted hover:text-text-base transition-colors font-body text-sm"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button
            asChild
            className="bg-primary text-dark font-heading font-bold uppercase tracking-wide px-6 rounded-full hover:bg-primary/90"
          >
            <a href="#trial">{SITE.trialCTA}</a>
          </Button>
        </nav>

        {/* Mobile hamburger */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              aria-label="Open menu"
              className={cn(
                'md:hidden flex items-center justify-center text-text-base p-2 rounded-md transition-colors hover:text-primary'
              )}
            >
              <Menu size={22} />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-dark border-border w-72 pt-12 px-6">
            <nav>
              <ul className="flex flex-col gap-6 list-none m-0 p-0">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="text-text-muted hover:text-text-base transition-colors font-body text-base"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button
                  asChild
                  className="w-full bg-primary text-dark font-heading font-bold uppercase tracking-wide rounded-full hover:bg-primary/90"
                >
                  <a href="#trial" onClick={() => setOpen(false)}>{SITE.trialCTA}</a>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
