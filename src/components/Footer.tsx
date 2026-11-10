import { ArrowUp } from 'lucide-react';
import { profile } from '../data/profile';
import SocialIcons from './SocialIcons';

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-5 px-5 py-8 sm:flex-row sm:justify-between sm:px-8">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <SocialIcons />
        <a href="#top" className="inline-flex items-center gap-2 py-2 text-sm font-medium text-muted hover:text-accent">
          Back to top
          <ArrowUp aria-hidden="true" className="h-4 w-4" />
        </a>
      </div>
    </footer>
  );
}
