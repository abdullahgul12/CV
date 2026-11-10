import { Download, GraduationCap, Mail, MapPin } from 'lucide-react';
import { profile } from '../data/profile';
import { contact } from '../data/contact';
import Section from './Section';
import Reveal from './Reveal';

export default function About() {
  return (
    <Section id="about" index={1} label="About" title="About me">
      <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
        <Reveal className="space-y-5 text-lg text-ink/90">
          {profile.about.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Reveal>

        <Reveal delay={0.1}>
          <aside aria-label="Quick facts" className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
            <h3 className="text-lg font-semibold">Quick facts</h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <p className="text-muted">Location</p>
                  <p className="text-base text-ink">{profile.location}</p>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <div className="min-w-0">
                  <p className="text-muted">Email</p>
                  <p className="text-base">
                    <a href={contact.emailHref} className="break-all text-ink underline-offset-4 hover:text-accent hover:underline">
                      {contact.email}
                    </a>
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <GraduationCap aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <p className="text-muted">Current study</p>
                  <p className="text-base text-ink">{profile.currentStudy}</p>
                </div>
              </li>
            </ul>
            <a
              href={profile.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download CV (opens in a new tab)"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent underline-offset-4 hover:underline"
            >
              <Download aria-hidden="true" className="h-4 w-4" />
              Download CV
            </a>
          </aside>
        </Reveal>
      </div>
    </Section>
  );
}
