import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { SITE } from '@/lib/constants';

export default function Hero() {
  return (
    <section className="min-h-screen bg-dark flex items-center pt-16 md:pt-0">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="flex flex-col gap-8">
            <div>
              <h1 className="font-heading font-800 text-4xl md:text-6xl lg:text-7xl leading-tight text-text-base uppercase tracking-tight mb-6">
                {SITE.tagline}
              </h1>
              <p className="text-text-muted text-lg font-body leading-relaxed max-w-lg">
                {SITE.subheadline}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                className="bg-primary text-dark font-heading font-700 uppercase tracking-wide px-8 py-3 rounded-full hover:bg-primary/90"
              >
                <a href="#trial">{SITE.trialCTA}</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border border-white/20 text-text-base font-body px-8 py-3 rounded-full hover:border-white/50"
              >
                <a href="#pricing">{SITE.secondaryCTA}</a>
              </Button>
            </div>
          </div>

          {/* Right: Image */}
          <div className="hidden md:block relative h-96 md:h-full min-h-96">
            <Image
              src="/hero.jpg"
              alt="Technical Lifts gym training floor"
              fill
              priority
              className="object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
