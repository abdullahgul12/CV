import { ArrowRight, Download } from 'lucide-react';
import { profile } from '../data/profile';
import { projects } from '../data/projects';
import { experience } from '../data/experience';
import Avatar from './Avatar';
import SocialIcons from './SocialIcons';

const facts = [
  { value: String(projects.length), label: 'Game demos showcased' },
  { value: String(experience.length), label: 'Companies' },
  { value: String(profile.buildingSince), label: 'Building since' },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[640px] w-[900px] max-w-none -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(34,211,238,0.13),transparent)]"
      />
      <div className="relative mx-auto grid w-full max-w-[1200px] items-center gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16 lg:py-28">
        <div>
          <p className="font-display text-sm font-medium uppercase tracking-[0.2em] text-accent">Hello, I'm</p>
          <h1 className="mt-4 text-[2.6rem] font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-5 font-display text-xl font-medium text-ink sm:text-2xl">{profile.tagline}</p>
          <p className="mt-4 max-w-xl text-base text-muted sm:text-lg">{profile.intro}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-bg transition hover:-translate-y-0.5 hover:bg-cyan-300"
            >
              View Projects
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </a>
            <a
              href={profile.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download CV (opens in a new tab)"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-6 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            >
              <Download aria-hidden="true" className="h-4 w-4" />
              Download CV
            </a>
          </div>

          <SocialIcons className="mt-8" />

          <dl className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-line pt-6">
            {facts.map((f) => (
              <div key={f.label} className="flex flex-col-reverse justify-end">
                <dt className="text-xs text-muted sm:text-sm">{f.label}</dt>
                <dd className="font-display text-2xl font-semibold text-ink sm:text-3xl">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mx-auto w-full max-w-[260px] sm:max-w-[320px] lg:max-w-[360px]">
          <Avatar />
        </div>
      </div>
    </section>
  );
}
