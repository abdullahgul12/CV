import type { IconType } from 'react-icons';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { socials, type SocialId } from '../data/contact';

const icons: Record<SocialId, IconType> = {
  linkedin: FaLinkedinIn,
  x: FaXTwitter,
  instagram: FaInstagram,
  facebook: FaFacebookF,
};

export default function SocialIcons({ className = '' }: { className?: string }) {
  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {socials.map(({ id, label, url }) => {
        const Icon = icons[id];
        return (
          <li key={id}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${label} profile (opens in a new tab)`}
              className="grid h-11 w-11 place-items-center rounded-full border border-line bg-surface text-muted transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            >
              <Icon aria-hidden="true" className="h-[18px] w-[18px]" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
