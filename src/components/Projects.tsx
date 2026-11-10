import { lazy, Suspense, useCallback, useState } from 'react';
import { ExternalLink, Play } from 'lucide-react';
import { FaGithub, FaYoutube } from 'react-icons/fa6';
import { projects, studios, type GameProject } from '../data/projects';
import { aiProjects, type AIProject } from '../data/aiProjects';
import { asset } from '../lib/asset';
import { getYouTubeId, youTubeThumbUrl } from '../lib/youtube';
import Section from './Section';
import Reveal from './Reveal';
import type { ModalVideo } from './VideoModal';

const VideoModalHost = lazy(() => import('./VideoModalHost'));

const ALL = 'All';
const AI = 'AI Projects';

const cardClass =
  'group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-line bg-surface text-left transition duration-300 hover:-translate-y-1 hover:border-accent/50';

function GameCard({ game, onOpen }: { game: GameProject; onOpen: (v: ModalVideo) => void }) {
  const videoId = getYouTubeId(game.video);
  return (
    <button
      type="button"
      className={cardClass}
      aria-label={`Play ${game.title} video (${game.studio})`}
      onClick={() => videoId && onOpen({ title: game.title, subtitle: game.studio, url: game.video, videoId })}
    >
      <div className="relative aspect-video w-full overflow-hidden bg-bg">
        <img
          src={asset(game.thumbnail)}
          alt={`${game.title} thumbnail`}
          loading="lazy"
          decoding="async"
          width={400}
          height={225}
          onError={(e) => {
            const img = e.currentTarget;
            const fallback = videoId ? youTubeThumbUrl(videoId) : '';
            if (fallback && img.src !== fallback) img.src = fallback;
          }}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <span
          aria-hidden="true"
          className="absolute inset-0 grid place-items-center bg-bg/55 opacity-0 transition duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
        >
          <span className="grid h-14 w-14 place-items-center rounded-full bg-accent text-bg">
            <Play className="h-6 w-6 translate-x-0.5 fill-current" />
          </span>
        </span>
      </div>
      <div className="flex flex-1 flex-col items-start gap-3 p-5">
        <h3 className="text-lg font-semibold text-ink">{game.title}</h3>
        <span className="mt-auto rounded-full border border-line bg-bg px-3 py-1 text-xs font-medium text-muted">
          {game.studio}
        </span>
      </div>
    </button>
  );
}

function AICard({ project, onOpen }: { project: AIProject; onOpen: (v: ModalVideo) => void }) {
  const { demo, github, video } = project.links;
  const videoId = video ? getYouTubeId(video) : null;
  const linkClass =
    'inline-flex items-center gap-2 rounded-full border border-line px-3.5 py-1.5 text-sm font-semibold text-ink transition hover:border-accent hover:text-accent';
  const external = { target: '_blank', rel: 'noopener noreferrer' } as const;

  return (
    <article className={cardClass}>
      {project.image && (
        <div className="aspect-video w-full overflow-hidden bg-bg">
          <img
            src={asset(project.image)}
            alt={`${project.title} preview`}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col items-start gap-3 p-5">
        <h3 className="text-lg font-semibold text-ink">{project.title}</h3>
        <p className="text-[15px] text-ink/80">{project.description}</p>
        <ul aria-label="Technologies" className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <li key={t} className="rounded-full border border-line bg-bg px-3 py-1 text-xs font-medium text-muted">
              {t}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {demo && (
            <a href={demo} {...external} aria-label={`${project.title} live demo (opens in a new tab)`} className={linkClass}>
              <ExternalLink aria-hidden="true" className="h-4 w-4" />
              Live Demo
            </a>
          )}
          {github && (
            <a href={github} {...external} aria-label={`${project.title} on GitHub (opens in a new tab)`} className={linkClass}>
              <FaGithub aria-hidden="true" className="h-4 w-4" />
              GitHub
            </a>
          )}
          {video && videoId && (
            <button
              type="button"
              className={linkClass}
              aria-label={`Play ${project.title} video`}
              onClick={() => onOpen({ title: project.title, subtitle: AI, url: video, videoId })}
            >
              <FaYoutube aria-hidden="true" className="h-4 w-4" />
              Video
            </button>
          )}
          {video && !videoId && (
            <a href={video} {...external} aria-label={`${project.title} video (opens in a new tab)`} className={linkClass}>
              <Play aria-hidden="true" className="h-4 w-4" />
              Video
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const hasAI = aiProjects.length > 0;
  const tabs = [ALL, ...(hasAI ? [AI] : []), ...studios.map((s) => s.name)];
  const [filter, setFilter] = useState<string>(ALL);
  const [video, setVideo] = useState<ModalVideo | null>(null);
  const [modalLoaded, setModalLoaded] = useState(false);
  const openModal = useCallback((v: ModalVideo) => {
    setModalLoaded(true);
    setVideo(v);
  }, []);
  const closeModal = useCallback(() => setVideo(null), []);

  const showAI = hasAI && (filter === ALL || filter === AI);
  const games = filter === ALL ? projects : projects.filter((p) => p.studio === filter);
  const description = studios.find((s) => s.name === filter)?.description;

  return (
    <Section id="projects" index={3} label="Projects" title="Things I've built">
      <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-2">
        {tabs.map((tab) => {
          const selected = tab === filter;
          return (
            <button
              key={tab}
              type="button"
              aria-pressed={selected}
              onClick={() => setFilter(tab)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                selected
                  ? 'border-accent bg-accent text-bg'
                  : 'border-line bg-surface text-muted hover:border-accent/60 hover:text-ink'
              }`}
            >
              {tab}
            </button>
          );
        })}
      </div>

      {description && <p className="mt-6 max-w-3xl text-[15px] text-ink/80 sm:text-base">{description}</p>}

      <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {showAI &&
          aiProjects.map((p) => (
            <li key={`ai-${p.title}`}>
              <Reveal className="h-full">
                <AICard project={p} onOpen={openModal} />
              </Reveal>
            </li>
          ))}
        {filter !== AI &&
          games.map((g) => (
            <li key={`${filter}-${g.title}`}>
              <Reveal className="h-full">
                <GameCard game={g} onOpen={openModal} />
              </Reveal>
            </li>
          ))}
      </ul>

      {modalLoaded && (
        <Suspense fallback={null}>
          <VideoModalHost video={video} onClose={closeModal} />
        </Suspense>
      )}
    </Section>
  );
}
