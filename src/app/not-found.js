import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6 pt-16">
      <div className="text-center">
        <p className="text-6xl font-bold tracking-tight text-ink-200 mb-4">404</p>
        <p className="text-ink-500 mb-8">页面不存在</p>
        <Link
          href="/"
          className="text-sm text-ink-900 hover:text-ink-600 transition-colors"
        >
          &larr; 返回首页
        </Link>
      </div>
    </div>
  );
}
