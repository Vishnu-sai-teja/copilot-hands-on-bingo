interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-full overflow-hidden bg-carnival-dark">

      {/* ── Ambient glow pools ───────────────────────────────────────── */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-candy-fizz/20 blur-[80px]" />
        <div className="absolute -bottom-40 -right-20 w-[28rem] h-[28rem] rounded-full bg-candy-soda/15 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-candy-grape/10 blur-[90px]" />
      </div>

      {/* ── Floating sticker layer ────────────────────────────────────── */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* emoji stickers */}
        <span className="absolute top-10 left-8 text-3xl motion-safe:animate-[candy-float_4s_ease-in-out_infinite]">⭐</span>
        <span className="absolute top-20 right-10 text-2xl motion-safe:animate-[candy-float-rev_5s_ease-in-out_0.5s_infinite]">🎱</span>
        <span className="absolute top-1/3 left-5 text-xl motion-safe:animate-[candy-float_3.5s_ease-in-out_1s_infinite]">✦</span>
        <span className="absolute bottom-28 right-8 text-3xl motion-safe:animate-[candy-float-rev_4.5s_ease-in-out_0.25s_infinite]">🎯</span>
        <span className="absolute bottom-14 left-12 text-2xl motion-safe:animate-[candy-float_5.5s_ease-in-out_1.75s_infinite]">✨</span>
        <span className="absolute top-2/3 right-14 text-lg motion-safe:animate-[candy-float-rev_3.5s_ease-in-out_2s_infinite]">◆</span>
        {/* geometric rings + pill accent */}
        <div className="absolute top-8 right-1/4 w-11 h-11 rounded-full border-2 border-candy-fizz/35 motion-safe:animate-[candy-float_6s_ease-in-out_0.75s_infinite]" />
        <div className="absolute bottom-24 left-1/3 w-7 h-7 rounded-full border-2 border-candy-soda/40 motion-safe:animate-[candy-float-rev_4s_ease-in-out_1.25s_infinite]" />
        <div className="absolute top-1/2 right-5 w-5 h-5 rounded-full border-2 border-candy-lemon/45 motion-safe:animate-[candy-float_3s_ease-in-out_2.5s_infinite]" />
        <div className="absolute top-1/4 left-1/4 w-14 h-5 rounded-full bg-candy-cherry/20 motion-safe:animate-[candy-float-rev_5.5s_ease-in-out_1.5s_infinite]" />
      </div>

      {/* ── Main content panel ────────────────────────────────────────── */}
      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-sm px-6 py-10">

        {/* Vibe label */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/85 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 shadow-lg">
          <span className="text-candy-lemon">★</span>
          <span>Icebreaker · Bingo</span>
          <span className="text-candy-lemon">★</span>
        </div>

        {/* Headline */}
        <h1 className="font-black leading-[0.9] tracking-tight mb-4" aria-label="Bingo Mixer">
          <span className="block text-[4.5rem] bg-gradient-to-r from-candy-fizz via-candy-grape to-candy-soda bg-clip-text text-transparent">
            Bingo
          </span>
          <span className="block text-[4.5rem] bg-gradient-to-r from-candy-soda via-candy-lime to-candy-lemon bg-clip-text text-transparent">
            Mixer
          </span>
        </h1>

        {/* Supporting line */}
        <p className="text-white/65 text-base font-medium tracking-wide mb-8">
          Find your people!
        </p>

        {/* How-to card */}
        <div className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 mb-8 text-left shadow-xl">
          <h2 className="text-white/90 font-bold text-xs uppercase tracking-wider mb-3.5 flex items-center gap-2">
            <span className="text-candy-lemon">◆</span>
            How to Play
          </h2>
          <ul className="space-y-2.5">
            <li className="flex items-start gap-3 text-white/70 text-sm">
              <span className="text-candy-fizz font-black text-base leading-none mt-0.5 shrink-0">①</span>
              <span>Find people who match the questions</span>
            </li>
            <li className="flex items-start gap-3 text-white/70 text-sm">
              <span className="text-candy-soda font-black text-base leading-none mt-0.5 shrink-0">②</span>
              <span>Tap a square when you find a match</span>
            </li>
            <li className="flex items-start gap-3 text-white/70 text-sm">
              <span className="text-candy-lime font-black text-base leading-none mt-0.5 shrink-0">③</span>
              <span>Get 5 in a row to win!</span>
            </li>
          </ul>
        </div>

        {/* CTA button */}
        <button
          onClick={onStart}
          className="w-full bg-gradient-to-r from-candy-fizz to-candy-grape text-white font-black py-5 px-8 rounded-2xl text-xl tracking-wide shadow-[0_8px_32px_0_rgba(240,4,127,0.45)] active:scale-95 transition-transform duration-100 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-candy-fizz/60 focus-visible:ring-offset-2 focus-visible:ring-offset-carnival-dark"
        >
          Start Game 🚀
        </button>

      </div>
    </div>
  );
}
