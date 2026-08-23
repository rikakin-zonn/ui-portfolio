import Link from 'next/link';
import Image from 'next/image';

export default function ProjectCard({ project, priority = false }) {
  return (
    <Link href={`/projects/${project.slug}/`} className="group block">
      <div className="relative overflow-hidden rounded-xl bg-ink-100 aspect-[16/10]">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          priority={priority}
        />
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-medium tracking-tight group-hover:text-ink-600 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-ink-500 mt-1">
            {project.category} · {project.year}
          </p>
        </div>
        <span className="text-ink-300 group-hover:text-ink-900 group-hover:translate-x-1 transition-all duration-300 text-lg">
          &rarr;
        </span>
      </div>
      <div className="mt-2 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="text-xs text-ink-400 px-2 py-0.5 rounded-full bg-ink-100">
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
