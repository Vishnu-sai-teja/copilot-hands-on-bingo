interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#3f1468]/45 px-4 backdrop-blur-sm">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="bingo-title"
        className="relative w-full max-w-sm overflow-hidden rounded-4xl border-4 border-white/80 bg-[linear-gradient(150deg,#fff6de_0%,#ffe3f6_52%,#dcf7ff_100%)] p-6 text-center shadow-[0_16px_0_#ff8cd0,0_30px_44px_rgba(104,35,146,0.38)] animate-[candy-pop-in_360ms_ease-out]"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-candy-blue/40 blur-sm"
        />
        <div className="relative mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border-4 border-white/90 bg-[conic-gradient(from_180deg,#ff6dbf,#ffd74a,#7bff5a,#35d7ff,#ff6dbf)] shadow-[0_0_0_8px_rgba(255,255,255,0.45)] animate-[candy-float_3s_ease-in-out_infinite]">
          <span className="text-4xl">🍬</span>
        </div>
        <p className="font-display text-[0.62rem] uppercase tracking-[0.22em] text-candy-soda">
          Sweet Streak
        </p>
        <h2 id="bingo-title" className="mt-2 font-display text-5xl text-candy-ink sm:text-6xl">
          BINGO!
        </h2>
        <p className="mt-3 text-base font-semibold text-candy-ink/80">
          You completed a line. Keep the candy combo going.
        </p>

        <button
          onClick={onDismiss}
          className="candy-button mt-7 w-full px-6 py-3 text-sm focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-candy-blue/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:text-base"
        >
          Keep Playing
        </button>
      </div>
    </div>
  );
}
