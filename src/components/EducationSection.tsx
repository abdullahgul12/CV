import { GraduationCap } from 'lucide-react';
import { education } from '../data/education';
import Section from './Section';
import Reveal from './Reveal';

export default function EducationSection() {
  return (
    <Section id="education" index={5} label="Education" title="Education">
      <div className="grid gap-5 md:grid-cols-3">
        {education.map((e, i) => (
          <Reveal key={e.degree} delay={i * 0.06}>
            <article className="h-full rounded-2xl border border-line bg-surface p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/50">
              <GraduationCap aria-hidden="true" className="h-6 w-6 text-accent" />
              <p className="mt-4 text-sm text-muted">{e.dates}</p>
              <h3 className="mt-1 text-lg font-semibold">{e.degree}</h3>
              <p className="mt-2 text-[15px] text-ink/80">{e.school}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
