import { useEffect, useState } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { profile } from '../data/profile';
import { navItems } from '../lib/nav';
import { useActiveSection } from '../lib/useActiveSection';

const sectionIds = navItems.map((n) => n.id);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const linkClass = (id: string) =>
    `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
      active === id ? 'text-accent' : 'text-muted hover:text-ink'
    }`;

  const cvButton = (extra: string) => (
    <a
      href={profile.cvUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download CV (opens in a new tab)"
      className={`items-center justify-center gap-2 rounded-full border border-accent/60 px-4 py-2 text-sm font-semibold text-accent transition hover:bg-accent hover:text-bg ${extra}`}
    >
      <Download aria-hidden="true" className="h-4 w-4" />
      Download CV
    </a>
  );

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-bg/75 backdrop-blur-md">
      <nav aria-label="Primary" className="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between px-5 sm:px-8">
        <a href="#top" className="font-display text-lg font-semibold tracking-tight text-ink">
          {profile.name}
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <a href={`#${id}`} aria-current={active === id ? 'true' : undefined} className={linkClass(id)}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        {cvButton('hidden lg:inline-flex')}

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
          className="grid h-11 w-11 place-items-center rounded-md text-ink lg:hidden"
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-bg px-5 pb-6 pt-2 sm:px-8 lg:hidden">
          <ul className="flex flex-col">
            {navItems.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  aria-current={active === id ? 'true' : undefined}
                  className={`block py-3 text-base ${linkClass(id)}`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          {cvButton('mt-3 flex w-full')}
        </div>
      )}
    </header>
  );
}
