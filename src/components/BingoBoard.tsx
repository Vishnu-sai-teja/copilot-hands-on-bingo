import type { BingoSquareData } from '../types';
import { BingoSquare } from './BingoSquare';

interface BingoBoardProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  onSquareClick: (squareId: number) => void;
}

export function BingoBoard({ board, winningSquareIds, onSquareClick }: BingoBoardProps) {
  return (
    <div className="w-full max-w-2xl animate-[candy-pop-in_520ms_ease-out]">
      <div className="candy-panel rounded-[1.8rem] p-3 sm:p-4">
        <div className="grid aspect-square w-full grid-cols-5 gap-2 sm:gap-3">
          {board.map((square) => (
            <BingoSquare
              key={square.id}
              square={square}
              isWinning={winningSquareIds.has(square.id)}
              onClick={() => onSquareClick(square.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
