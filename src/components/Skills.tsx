import { skills } from '../data/skills';
import Section from './Section';
import Reveal from './Reveal';

export default function Skills() {
  const groups = skills.filter((g) => g.items.length > 0);
  return (
    <Section id="skills" index={4} label="Skills" title="What I work with">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((group, i) => (
          <Reveal key={group.title} delay={(i % 3) * 0.06}>
            <article className="h-full rounded-2xl border border-line bg-surface p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/50">
              <h3 className="text-lg font-semibold">{group.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="rounded-lg border border-line bg-bg px-3 py-1.5 text-sm text-ink/85">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
