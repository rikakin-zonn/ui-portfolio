import { projects } from '@/data/projects';
import { profile } from '@/data/profile';
import ProjectCard from '@/components/ProjectCard';

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="animate-fade-up">
            {profile.available && (
              <div className="inline-flex items-center gap-2 text-sm text-ink-500 mb-6">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                正在寻找新的工作机会
              </div>
            )}
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
              {profile.name}
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-ink-500 font-light">
              {profile.title} — {profile.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6 scroll-mt-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-sm font-medium text-ink-400 uppercase tracking-wider mb-4">
                关于我
              </h2>
              <p className="text-lg leading-relaxed text-ink-700">{profile.bio}</p>
              <div className="mt-8 pt-6 border-t border-ink-100">
                <p className="text-sm text-ink-400 mb-1">教育背景</p>
                <p className="text-ink-700">{profile.education.school}</p>
                <p className="text-sm text-ink-600">{profile.education.major}</p>
                <p className="text-sm text-ink-400">{profile.education.period}</p>
              </div>
            </div>
            <div>
              <h2 className="text-sm font-medium text-ink-400 uppercase tracking-wider mb-4">
                技能
              </h2>
              <div className="space-y-1">
                {profile.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between py-3 border-b border-ink-100"
                  >
                    <span className="text-ink-700">{skill.name}</span>
                    <span className="text-sm text-ink-400">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Works */}
      <section id="work" className="py-20 px-6 scroll-mt-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-sm font-medium text-ink-400 uppercase tracking-wider mb-2">
                精选作品
              </h2>
              <p className="text-3xl font-bold tracking-tight">Selected Work</p>
            </div>
            <p className="text-sm text-ink-400 hidden md:block">{projects.length} 个项目</p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-8 gap-y-16">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} priority={index < 2} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            让我们一起创造
          </h2>
          <p className="text-ink-500 mb-8">有想法？随时和我聊聊</p>
          <a
            href={`mailto:${profile.email}`}
            className="inline-block px-8 py-3 bg-ink-900 text-ink-50 rounded-full text-sm font-medium hover:bg-ink-700 transition-colors"
          >
            {profile.email}
          </a>
        </div>
      </section>
    </>
  );
}
