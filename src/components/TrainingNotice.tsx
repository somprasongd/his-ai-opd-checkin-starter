export function TrainingNotice() {
  return (
    <aside className="rounded-2xl border border-teal-700/20 bg-teal-500/10 p-5">
      <p className="font-semibold">Training rule</p>
      <p className="mt-1 text-sm opacity-75">Use mock/synthetic patient data only. Keep each task on its own feature branch/worktree. Review Storybook and git diff before committing.</p>
    </aside>
  );
}
