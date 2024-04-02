import { Search } from 'lucide-react';

export default function Participants() {
  return (
    <main className="flex h-full w-full gap-4 flex-col">
      <header className="flex w-full gap-3 items-center">
        <h1 className="text-2xl font-bold">Participants</h1>

        <span className="px-3 py-1.5 min-w-72 border border-white/10 rounded-lg text-sm flex items-center gap-3">
          <Search className="size-4 text-emerald-300" />
          <input
            type="text"
            placeholder="Search participants..."
            className="flex-1 bg-transparent"
          />
        </span>
      </header>
    </main>
  );
}
