import { SITE } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Top row: name + tagline */}
        <div className="mb-10">
          <p className="font-heading text-xl font-bold text-primary tracking-tight mb-2">
            {SITE.name}
          </p>
          <p className="text-text-muted font-body text-sm max-w-sm">
            {SITE.tagline}
          </p>
        </div>

        {/* Middle row: 3-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Location */}
          <div>
            <p className="font-heading text-xs font-bold uppercase tracking-widest text-primary mb-3">
              Location
            </p>
            <address className="not-italic font-body text-sm text-text-muted leading-relaxed">
              <span className="block">{SITE.address}</span>
              <span className="block text-text-muted/70 text-xs mt-1">
                Gym in Vikaspuri, New Delhi
              </span>
            </address>
          </div>

          {/* Contact */}
          <div>
            <p className="font-heading text-xs font-bold uppercase tracking-widest text-primary mb-3">
              Contact
            </p>
            <ul className="font-body text-sm text-text-muted leading-relaxed space-y-1 list-none p-0 m-0">
              <li>
                <a
                  href={`tel:${SITE.phone}`}
                  className="hover:text-text-base transition-colors"
                >
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="hover:text-text-base transition-colors"
                >
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Timings */}
          <div>
            <p className="font-heading text-xs font-bold uppercase tracking-widest text-primary mb-3">
              Hours
            </p>
            <p className="font-body text-sm text-text-muted leading-relaxed">
              {SITE.timings}
            </p>
          </div>
        </div>

        {/* Bottom row: social links + copyright */}
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <ul className="flex items-center gap-6 list-none p-0 m-0">
            {SITE.instagramUrl && (
              <li>
                <a
                  href={SITE.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-text-muted hover:text-text-base transition-colors"
                >
                  Instagram
                </a>
              </li>
            )}
            {SITE.googleReviewsUrl && (
              <li>
                <a
                  href={SITE.googleReviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-text-muted hover:text-text-base transition-colors"
                >
                  Google Reviews
                </a>
              </li>
            )}
            {SITE.googleMapsUrl && (
              <li>
                <a
                  href={SITE.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-text-muted hover:text-text-base transition-colors"
                >
                  Get Directions
                </a>
              </li>
            )}
          </ul>
          <p className="font-body text-xs text-text-muted">
            &copy; {currentYear} {SITE.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
