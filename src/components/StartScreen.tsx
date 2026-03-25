interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="candy-bg relative flex min-h-full items-center justify-center overflow-hidden px-4 py-8 sm:px-6">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-14 top-8 h-36 w-36 rounded-full bg-candy-blue/40 blur-sm animate-[candy-float_6s_ease-in-out_infinite]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 bottom-10 h-40 w-40 rounded-full bg-candy-fizz/35 blur-sm animate-[candy-float_7s_ease-in-out_infinite]"
      />

      <div className="candy-panel relative w-full max-w-xl p-6 text-center animate-[candy-pop-in_460ms_ease-out] sm:p-8">
        <p className="font-display text-[0.62rem] uppercase tracking-[0.22em] text-candy-soda sm:text-xs">
          Playful Candy Pop
        </p>
        <h1 className="mt-3 font-display text-4xl leading-none text-candy-ink sm:text-6xl">
          Bingo Mixer
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base font-semibold text-candy-ink/85 sm:text-lg">
          Neon sweet, zero awkward. Find your people and make a five-square candy streak.
        </p>

        <div className="mt-7 rounded-3xl border-2 border-white/80 bg-white/80 p-5 text-left shadow-[0_10px_0_#9defff] sm:p-6">
          <h2 className="font-display text-sm uppercase tracking-[0.14em] text-candy-ink sm:text-base">
            How To Play
          </h2>
          <ul className="mt-4 space-y-3 text-sm font-medium text-candy-ink/85 sm:text-base">
            <li className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-candy-fizz text-xs font-black text-white">
                1
              </span>
              <span>Find people who match each prompt.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-candy-soda text-xs font-black text-white">
                2
              </span>
              <span>Tap a square for every match you make.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-candy-lime text-xs font-black text-candy-ink">
                3
              </span>
              <span>Get five in a row to shout BINGO.</span>
            </li>
          </ul>
        </div>

        <button
          onClick={onStart}
          className="candy-button mt-8 w-full px-8 py-4 text-sm focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-candy-blue/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:text-base"
        >
          Start Game
        </button>
      </div>
    </div>
  );
}
