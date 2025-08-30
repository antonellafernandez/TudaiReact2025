export default function GameBoard({ onSelectSquare, board }) {
  return (
    <ol id="game-board" className="bg-yellow-400 p-1 inline-block">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol className="flex">
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}

                  className="w-30 h-30 m-1 bg-gray-200 flex items-center justify-center text-2xl font-bold"
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
