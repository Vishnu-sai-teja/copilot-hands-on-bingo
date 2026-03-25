interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6 bg-white">
      <div className="text-center max-w-sm w-full animate-fade-up motion-reduce:animate-none">
        {/* Candy accent dots — decorative brand touch */}
        <div aria-hidden="true" className="flex justify-center gap-2 mb-6">
          <span className="block w-2.5 h-2.5 rounded-full bg-accent" />
          <span className="block w-2.5 h-2.5 rounded-full bg-bingo" />
          <span className="block w-2.5 h-2.5 rounded-full bg-marked-border" />
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-2">
          Bingo Mixer
        </h1>
        <p className="text-base text-gray-500 mb-8">Find your people!</p>

        <div className="bg-gray-50 rounded-2xl p-6 mb-8 text-left border border-gray-100">
          <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
            How to play
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-gray-600">
              <span aria-hidden="true" className="shrink-0 w-5 h-5 rounded-full bg-accent/10 text-accent text-xs font-bold flex items-center justify-center mt-0.5">1</span>
              <span>Find people who match the questions</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-gray-600">
              <span aria-hidden="true" className="shrink-0 w-5 h-5 rounded-full bg-accent/10 text-accent text-xs font-bold flex items-center justify-center mt-0.5">2</span>
              <span>Tap a square when you find a match</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-gray-600">
              <span aria-hidden="true" className="shrink-0 w-5 h-5 rounded-full bg-accent/10 text-accent text-xs font-bold flex items-center justify-center mt-0.5">3</span>
              <span>Get 5 in a row to win!</span>
            </li>
          </ul>
        </div>

        <button
          onClick={onStart}
          className="w-full bg-accent text-white font-semibold py-4 px-8 rounded-xl text-lg hover:bg-accent-light active:bg-accent-light active:scale-95 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Start Game
        </button>
      </div>
    </div>
  );
}
