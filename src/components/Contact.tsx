import { Mail, MapPin, Phone } from 'lucide-react';
import { contact } from '../data/contact';
import Section from './Section';
import Reveal from './Reveal';
import SocialIcons from './SocialIcons';

export default function Contact() {
  return (
    <Section id="contact" index={6} label="Contact" title="Get In Touch">
      <Reveal>
        <div className="grid gap-10 rounded-3xl border border-line bg-surface p-6 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <ul className="space-y-5">
            <li className="flex gap-4">
              <Mail aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-accent" />
              <div className="min-w-0">
                <p className="text-sm text-muted">Email</p>
                <a href={contact.emailHref} className="break-all text-lg text-ink underline-offset-4 hover:text-accent hover:underline">
                  {contact.email}
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <Phone aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-accent" />
              <div>
                <p className="text-sm text-muted">Phone</p>
                <a href={contact.phoneHref} className="text-lg text-ink underline-offset-4 hover:text-accent hover:underline">
                  {contact.phone}
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <MapPin aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-accent" />
              <div>
                <p className="text-sm text-muted">Address</p>
                <address className="text-lg not-italic text-ink">{contact.address}</address>
              </div>
            </li>
          </ul>

          <div className="flex flex-col items-start gap-6 lg:items-end">
            <a
              href={contact.emailHref}
              className="inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 text-base font-semibold text-bg transition hover:-translate-y-0.5 hover:bg-cyan-300"
            >
              <Mail aria-hidden="true" className="h-5 w-5" />
              Email me
            </a>
            <SocialIcons />
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
