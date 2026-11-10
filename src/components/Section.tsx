import type { ReactNode } from 'react';
import Reveal from './Reveal';

type Props = { id: string; index: number; label: string; title: string; children: ReactNode };

export default function Section({ id, index, label, title, children }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="border-t border-line/60 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <Reveal>
          <p className="font-display text-sm font-medium uppercase tracking-[0.2em] text-accent">
            {String(index).padStart(2, '0')} · {label}
          </p>
          <h2 id={`${id}-title`} className="mt-3 text-3xl font-semibold sm:text-4xl">
            {title}
          </h2>
        </Reveal>
        <div className="mt-10 sm:mt-14">{children}</div>
      </div>
    </section>
  );
}
