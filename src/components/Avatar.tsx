import { useState } from 'react';
import { profile } from '../data/profile';
import { asset } from '../lib/asset';

/** Profile photo; falls back to a circular "AG" monogram if the image is missing. */
export default function Avatar() {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={`${profile.name} monogram`}
        className="grid aspect-square w-full place-items-center rounded-full border border-accent/60 bg-surface font-display text-7xl font-bold text-accent sm:text-8xl"
      >
        {profile.initials}
      </div>
    );
  }

  return (
    <div className="rounded-[2rem] p-1.5 ring-1 ring-accent/70">
      <img
        src={asset(profile.photo)}
        alt={`Portrait of ${profile.name}`}
        width={700}
        height={900}
        onError={() => setFailed(true)}
        className="aspect-[4/5] w-full rounded-[1.65rem] bg-surface object-cover object-top"
      />
    </div>
  );
}
