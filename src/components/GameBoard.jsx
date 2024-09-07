

export default function GameBoard({ onSelectSquare, board }) {

  //   const [gameBoard, setGameBoard] = useState(initialGameBoard);

  //   function handleClick(rowIndex, colIndex) {
  //     setGameBoard((prevGameBoard) => {
  //       const updateBoard = [
  //         ...prevGameBoard.map((innerArray) => [...innerArray]),
  //       ];
  //       updateBoard[rowIndex][colIndex] = activePlayerSymbol;
  //       return updateBoard;
  //     });
  //     onSelectSquare();
  //   }
  return (
    <ol id="game-board">
      {board.map((el, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {el.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  disabled={playerSymbol !== null}
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
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
