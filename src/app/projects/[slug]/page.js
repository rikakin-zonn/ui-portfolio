import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { projects, getProjectBySlug, getAllSlugs } from '@/data/projects';
import { profile } from '@/data/profile';

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return {
    title: `${project.title} — ${profile.name}`,
    description: project.description,
  };
}

export default function ProjectPage({ params }) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <article className="pt-24">
      {/* Header */}
      <header className="px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/#work"
            className="text-sm text-ink-400 hover:text-ink-900 transition-colors mb-8 inline-block"
          >
            &larr; 返回作品
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-4 text-sm text-ink-400">
            <span>{project.category}</span>
            <span>·</span>
            <span>{project.year}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            {project.title}
          </h1>
          <p className="text-xl text-ink-500 leading-relaxed max-w-2xl">
            {project.description}
          </p>
        </div>
      </header>

      {/* Cover Image */}
      <div className="px-6 mb-16">
        <div className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-2xl bg-ink-100 aspect-[16/9]">
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="px-6 py-8">
        <div className="mx-auto max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8 mb-12 pb-12 border-b border-ink-200">
            <div>
              <h3 className="text-xs uppercase tracking-wider text-ink-400 mb-2">角色</h3>
              <p className="text-ink-700">{project.role}</p>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-wider text-ink-400 mb-2">工具</h3>
              <p className="text-ink-700">{project.tools.join(' · ')}</p>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-wider text-ink-400 mb-2">标签</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-ink-500 px-2 py-0.5 rounded-full bg-ink-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Overview */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">项目概述</h2>
            <p className="text-lg leading-relaxed text-ink-600">{project.overview}</p>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="px-6 py-12">
        <div className="mx-auto max-w-5xl space-y-8">
          {project.gallery.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl bg-ink-100 aspect-[4/3]"
            >
              <Image
                src={image}
                alt={`${project.title} — 图 ${index + 1}`}
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Next Project */}
      <div className="px-6 py-20 border-t border-ink-200">
        <div className="mx-auto max-w-6xl">
          <Link href={`/projects/${nextProject.slug}/`} className="group block">
            <p className="text-sm text-ink-400 mb-2">下一个项目</p>
            <div className="flex items-center justify-between">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight group-hover:text-ink-600 transition-colors">
                {nextProject.title}
              </h3>
              <span className="text-ink-300 group-hover:text-ink-900 group-hover:translate-x-2 transition-all duration-300 text-2xl">
                &rarr;
              </span>
            </div>
          </Link>
        </div>
      </div>
    </article>
  );
}
