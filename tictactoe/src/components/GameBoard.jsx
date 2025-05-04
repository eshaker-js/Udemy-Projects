


export default function GameBoard({handleSquareClicked, gameBoard}) {
/*  const [currentGameBoard, setGameBoard] = useState(initialGameBoard)
 
  function handleSquareClicked(rowIndex, colIndex) {
    setGameBoard((previousGameBoard) => {
      const newGameBoard = [... previousGameBoard.map((row) => [...row])]
      newGameBoard[rowIndex][colIndex] = activePlayer
      return newGameBoard
    })
    changeActivePlayer()
    moved state up
  } */


  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSquareClicked(rowIndex, colIndex)} disabled = {!(playerSymbol === null)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  )
}
