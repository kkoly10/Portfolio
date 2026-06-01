import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 text-sm text-ink/55 sm:flex-row sm:px-6">
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <p>Built with Next.js, TypeScript & Tailwind CSS.</p>
      </div>
    </footer>
  );
}
