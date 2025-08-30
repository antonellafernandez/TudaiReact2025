export default function GameBoard({ onSelectSquare, board }) {
  return (
    <ol id="game-board" className="flex flex-col items-center justify-between w-full mt-10 gap-2 bg-yellow-400">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol className="flex gap-2">
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}

                  className="w-30 h-30 bg-gray-200 flex items-center justify-center text-2xl font-bold"
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
