import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  return (
    <div className="candy-bg relative flex min-h-full flex-col overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-4 top-20 h-28 w-28 rounded-full bg-candy-fizz/30 blur-sm animate-[candy-float_6.5s_ease-in-out_infinite]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-20 right-2 h-32 w-32 rounded-full bg-candy-blue/30 blur-sm animate-[candy-float_5.5s_ease-in-out_infinite]"
      />

      <header className="relative mx-auto w-full max-w-4xl px-3 pt-4 sm:px-6 sm:pt-5">
        <div className="candy-panel flex items-center justify-between gap-3 rounded-3xl px-3 py-3 sm:px-5">
          <button
            onClick={onReset}
            className="candy-button-secondary px-4 py-2 text-xs focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-candy-fizz/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:text-sm"
          >
            Back
          </button>
          <h1 className="font-display text-lg text-candy-ink sm:text-2xl">Bingo Mixer</h1>
          <span className="candy-chip hidden px-3 py-1 text-[0.65rem] font-display uppercase tracking-[0.14em] text-candy-ink sm:inline-flex">
            Candy Pop
          </span>
        </div>
      </header>

      <div className="relative mx-auto mt-3 w-full max-w-4xl px-3 sm:px-6">
        <p className="candy-chip w-full px-4 py-2 text-center text-sm font-semibold text-candy-ink sm:text-base">
          Tap a square when you find someone who matches it.
        </p>
      </div>

      {hasBingo && (
        <div className="relative mx-auto mt-3 w-full max-w-4xl px-3 sm:px-6">
          <div className="rounded-2xl border-2 border-white/80 bg-[linear-gradient(90deg,#ff6dbf_0%,#ffd74a_48%,#7bff5a_100%)] px-4 py-2 text-center font-display text-sm tracking-[0.08em] text-candy-ink shadow-[0_8px_0_#ffb347] animate-[candy-pop-in_350ms_ease-out] sm:text-base">
            Bingo Spark! You scored a candy line.
          </div>
        </div>
      )}

      <div className="relative flex flex-1 items-center justify-center px-3 pb-6 pt-4 sm:px-6 sm:pb-8">
        <BingoBoard
          board={board}
          winningSquareIds={winningSquareIds}
          onSquareClick={onSquareClick}
        />
      </div>
    </div>
  );
}
