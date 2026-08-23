import { profile } from '@/data/profile';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-200 mt-24">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-1">{profile.name}</h3>
            <p className="text-sm text-ink-500">{profile.title}</p>
            <p className="text-sm text-ink-400 mt-1">{profile.location}</p>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="text-sm text-ink-600 hover:text-ink-900 transition-colors"
            >
              {profile.email}
            </a>
            <div className="flex gap-4">
              <a href={profile.social.dribbble} target="_blank" rel="noopener noreferrer" className="text-sm text-ink-500 hover:text-ink-900 transition-colors">
                Dribbble
              </a>
              <a href={profile.social.behance} target="_blank" rel="noopener noreferrer" className="text-sm text-ink-500 hover:text-ink-900 transition-colors">
                Behance
              </a>
              <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-ink-500 hover:text-ink-900 transition-colors">
                LinkedIn
              </a>
              <a href={profile.social.github} target="_blank" rel="noopener noreferrer" className="text-sm text-ink-500 hover:text-ink-900 transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-ink-100">
          <p className="text-xs text-ink-400">
            © {year} {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
