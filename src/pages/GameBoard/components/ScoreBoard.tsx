import Player from "../models/player";

const ScoreBoard: React.FC<{
  currentPlayer: Player;
  winner?: Player;
  onReMatch: () => void;
}> = function ({ currentPlayer, winner, onReMatch }) {
  return (
    <div id="score-board">
      {winner && (
        <div id="winner-message">
          {winner.name} wins!
          <button id="reMatch-btn" onClick={onReMatch}>
            Re-match?
          </button>
          <div
            id="score-board-player-image"
            className="fixed top-24 z-10 scale-50"
          >
            <img
              src={currentPlayer.char}
              alt="player-character"
              className="animate-bounce"
            ></img>
          </div>
        </div>
      )}

      {!winner && (
        <div id="on-play-message">
          <div>It's {currentPlayer.name}'s turn</div>
          <div id="score-board-player-image">
            <img src={currentPlayer.char} alt="player-character"></img>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScoreBoard;