export default function ExperimentPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6 pt-16">
      <div className="text-center max-w-lg">
        <div className="inline-block mb-6 px-3 py-1 rounded-full bg-ink-100 text-xs text-ink-500 tracking-wider">
          LAB
        </div>
        <h1 className="text-4xl font-bold tracking-tight mb-4">实验空间</h1>
        <p className="text-ink-500 leading-relaxed">
          这里将放置一些 3D 与交互实验作品，包括 Three.js
          粒子效果、着色器可视化、鼠标交互实验等。目前还在规划中，敬请期待。
        </p>
        <p className="mt-8 text-sm text-ink-400">
          3D 内容不会出现在首页，以保证加载性能。
        </p>
      </div>
    </div>
  );
}
