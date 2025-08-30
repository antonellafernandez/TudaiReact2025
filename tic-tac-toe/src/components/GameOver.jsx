export default function GameOver({ winner, onRestart }) {
  return (
    <div
      id="game-over"
      className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center 
      bg-gray-800 opacity-90 rounded shadow-2xl animate-jump-in">

      <h2>Game Over!</h2>
      {winner && <p>{winner} won!</p>}
      {!winner && <p>It&apos;s a draw!</p>}

      <p>
        <button onClick={onRestart}>Rematch!</button>
      </p>

    </div>
  );
}
