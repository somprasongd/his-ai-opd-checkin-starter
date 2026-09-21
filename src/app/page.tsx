import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen p-6 md:p-12">
      <div className="mx-auto max-w-4xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-teal-700 dark:text-teal-300">HIS AI Product Workshop</p>
        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">OPD Patient Check-in Starter</h1>
        <p className="mt-5 max-w-2xl text-lg opacity-70">This repository is intentionally incomplete. You will build US-001 with an AI coding agent while practicing Git, worktrees, Storybook, mock states, debugging, and review.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link className="rounded-xl bg-teal-700 px-5 py-3 font-semibold text-white" href="/opd/check-in">Open training workspace</Link>
          <a className="rounded-xl border border-black/10 px-5 py-3 font-semibold dark:border-white/20" href="https://github.com/somprasongd/his-ai-product-workshop">Open course source</a>
        </div>
      </div>
    </main>
  );
}
