interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-full bg-arcade-bg relative overflow-hidden">

      {/* Decorative geometric grid background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-arcade-grid"
      />

      {/* Top accent bar */}
      <div
        aria-hidden="true"
        className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-indigo-700 via-bingo to-indigo-700"
      />

      {/* Content stack */}
      <div className="relative z-10 w-full max-w-sm px-4 py-10 sm:py-16 space-y-5">

        {/* Challenge badge */}
        <div className="flex justify-center motion-safe:animate-[fadeSlideUp_0.4s_ease-out_both]">
          <span className="inline-flex items-center gap-1.5 bg-indigo-950/80 border border-indigo-600/50 text-indigo-300 text-[11px] font-bold tracking-[0.15em] uppercase rounded-full px-3 py-1">
            <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-bingo inline-block" />
            Mixer Challenge
          </span>
        </div>

        {/* Title card */}
        <div className="motion-safe:animate-[fadeSlideUp_0.4s_ease-out_0.1s_both] bg-arcade-panel border border-indigo-700/50 rounded-2xl px-6 py-5 text-center relative overflow-hidden">
          <div aria-hidden="true" className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-bingo rounded-tl-2xl" />
          <div aria-hidden="true" className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-bingo rounded-tr-2xl" />
          <h1 className="text-5xl font-black tracking-tight text-white leading-none">
            BINGO
            <span className="block text-bingo text-3xl font-bold mt-0.5 tracking-widest">MIXER</span>
          </h1>
          <p className="text-indigo-300 text-sm font-medium mt-3">Find your people!</p>
        </div>

        {/* Stats row */}
        <div className="motion-safe:animate-[fadeSlideUp_0.4s_ease-out_0.2s_both] grid grid-cols-3 gap-2.5">
          {[
            { value: '25', label: 'Squares' },
            { value: '5×', label: 'To Win' },
            { value: '∞', label: 'Connections' },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="bg-arcade-panel border border-indigo-700/50 rounded-xl py-3 text-center"
            >
              <span className="block text-2xl font-black text-bingo leading-none">{value}</span>
              <span className="block text-[11px] font-bold text-indigo-400 tracking-widest uppercase mt-1">{label}</span>
            </div>
          ))}
        </div>

        {/* How to play */}
        <div className="motion-safe:animate-[fadeSlideUp_0.4s_ease-out_0.3s_both] bg-arcade-panel border border-indigo-700/50 rounded-2xl overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-2.5 border-b border-indigo-700/40">
            <div aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-bingo flex-none" />
            <span className="text-[11px] font-black text-indigo-300 tracking-[0.15em] uppercase">How to play</span>
          </div>
          <ul className="list-none divide-y divide-indigo-700/30">
            {[
              'Find people who match the questions',
              'Tap a square when you find a match',
              'Get 5 in a row to win!',
            ].map((step, i) => (
              <li key={i} className="flex items-center gap-3 px-4 py-3">
                <span
                  aria-hidden="true"
                  className="flex-none w-6 h-6 rounded-full bg-indigo-800/70 border border-indigo-600/50 inline-flex items-center justify-center text-[11px] font-black text-bingo"
                >
                  {i + 1}
                </span>
                <span className="text-sm text-indigo-100">{step}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="motion-safe:animate-[fadeSlideUp_0.4s_ease-out_0.4s_both]">
          <button
            onClick={onStart}
            className="w-full bg-bingo text-gray-950 font-black text-xl py-4 rounded-xl tracking-wide
              hover:bg-amber-300 active:scale-95 transition-all
              focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-bingo/50 focus-visible:ring-offset-2 focus-visible:ring-offset-arcade-bg
              shadow-[0_0_24px_rgba(251,191,36,0.25)] hover:shadow-[0_0_36px_rgba(251,191,36,0.4)]
              motion-reduce:transition-none motion-reduce:active:scale-100"
          >
            START GAME <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      {/* Bottom accent bar */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-indigo-700/60 to-transparent"
      />
    </div>
  );
}
