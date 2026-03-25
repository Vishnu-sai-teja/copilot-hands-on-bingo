import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const baseClasses =
    'group relative flex min-h-[66px] select-none items-center justify-center overflow-hidden rounded-[1.1rem] border-2 px-1.5 py-1 text-center text-[0.68rem] leading-tight font-semibold transition duration-200 ease-out focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-candy-blue/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:opacity-100 sm:min-h-[78px] sm:px-2 sm:text-xs';

  const stateClasses = square.isMarked
    ? isWinning
      ? 'border-candy-lemon bg-[linear-gradient(150deg,_#ffe65d_0%,_#ff9d6b_58%,_#ff5fbe_100%)] text-candy-ink shadow-[0_0_0_3px_rgba(255,255,255,0.65),0_10px_18px_rgba(255,103,188,0.42)] animate-[candy-win-pop_700ms_ease-in-out_infinite_alternate]'
      : 'border-marked-border bg-[linear-gradient(150deg,_#ff9dde_0%,_#ffaed6_52%,_#ffd8ef_100%)] text-candy-ink shadow-[0_0_0_2px_rgba(255,255,255,0.75),0_8px_14px_rgba(255,78,178,0.28)]'
    : 'border-white/85 bg-[linear-gradient(145deg,_#ffffff_0%,_#f4fdff_52%,_#fff8ff_100%)] text-candy-ink shadow-[0_0_0_2px_rgba(255,255,255,0.75),0_6px_10px_rgba(53,215,255,0.24)] hover:-translate-y-0.5 hover:shadow-[0_0_0_2px_rgba(255,255,255,0.8),0_10px_14px_rgba(53,215,255,0.36)] active:translate-y-0';

  const freeSpaceClasses = square.isFreeSpace
    ? 'cursor-default border-candy-lime bg-[linear-gradient(140deg,_#cbff8a_0%,_#e8ffa5_100%)] text-candy-ink shadow-[0_0_0_3px_rgba(255,255,255,0.72),0_10px_16px_rgba(123,255,90,0.34)] text-[0.78rem] font-black'
    : 'cursor-pointer';

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${stateClasses} ${freeSpaceClasses}`}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
    >
      {isWinning && !square.isFreeSpace && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-white/45 blur-[1px] animate-[candy-shine_1.1s_linear_infinite]"
        />
      )}
      <span className="relative z-10 wrap-break-word hyphens-auto">{square.text}</span>
      {square.isMarked && !square.isFreeSpace && (
        <span className="absolute right-1.5 top-1.5 z-20 rounded-full bg-white/70 px-1 text-[0.62rem] font-black text-candy-fizz shadow-[0_2px_4px_rgba(0,0,0,0.15)]">
          ✓
        </span>
      )}
    </button>
  );
}
