export function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line bg-ink-800/70 px-3 py-1 text-xs font-medium text-white/75">
      {children}
    </span>
  );
}
