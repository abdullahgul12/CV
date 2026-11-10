import { experience } from '../data/experience';
import Section from './Section';
import Reveal from './Reveal';

export default function ExperienceSection() {
  return (
    <Section id="experience" index={2} label="Experience" title="Where I've worked">
      <ol className="relative space-y-8 border-l border-line pl-6 sm:pl-10">
        {experience.map((job) => (
          <li key={`${job.company}-${job.dates}`} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[31px] top-7 h-3.5 w-3.5 rounded-full border-2 border-accent bg-bg sm:-left-[47px]"
            />
            <Reveal>
              <article className="rounded-2xl border border-line bg-surface p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/50 sm:p-8">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <h3 className="text-xl font-semibold">
                    {job.role} <span className="text-accent">· {job.company}</span>
                  </h3>
                  <p className="shrink-0 text-sm text-muted">{job.dates}</p>
                </div>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] text-ink/85 marker:text-accent/70">
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                {job.keyProject && (
                  <p className="mt-4 text-[15px]">
                    <span className="font-semibold text-ink">Key project:</span>{' '}
                    <span className="text-ink/85">{job.keyProject}</span>
                  </p>
                )}
                <ul aria-label="Technologies" className="mt-5 flex flex-wrap gap-2">
                  {job.tech.map((t) => (
                    <li key={t} className="rounded-full border border-line bg-bg px-3 py-1 text-xs font-medium text-muted">
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
