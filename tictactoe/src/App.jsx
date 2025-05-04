import Player from "./components/Player.jsx"
import GameBoard from "./components/GameBoard.jsx"
import Log from "./components/Log.jsx"
import { useState } from "react"
import { WINNING_COMBINATIONS } from "./components/winning-combinations.js"
import GameOverScreen from "./components/GameOverScreen.jsx"


const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

function chooseActivePlayer(gameState){
  let currentSymbol = "X"
  if (
    gameState.length > 0 &&
    gameState[0].player === "X"
  ) {
    currentSymbol = "O"
  }
  return currentSymbol
}

function App() {
  const [currentGameProgress, setGameProgress] = useState([])
  /* const [currentActivePlayer, setActivePlayer] = useState("X") */

  function handleBoardClicked(rowIndex, colIndex) {
    /* setActivePlayer((previousActivePlayer) =>
      previousActivePlayer === "X" ? "O" : "X"
    ) */

    setGameProgress((previousGameProgress) => {
      const currentSymbol = chooseActivePlayer(previousGameProgress)
      const progressEntry = {
        square: {
          row: rowIndex,
          col: colIndex,
        },
        player: currentSymbol,
      }
      const newGameProgress = [progressEntry, ...previousGameProgress]
      return newGameProgress
    })
  }
  function handleRematchClicked(){
    setGameProgress([])
  }

  let currentActivePlayer = chooseActivePlayer(currentGameProgress)
  let currentGameBoard = [...initialGameBoard.map(row => [...row])]
  for(const entry of currentGameProgress){
    const {row, col} = {...entry.square}
    currentGameBoard[row][col] = entry.player
  }

  let winner

  for (const combination of WINNING_COMBINATIONS){
    if(
      currentGameBoard[combination[0].row][combination[0].column] &&
      currentGameBoard[combination[0].row][combination[0].column] ===
      currentGameBoard[combination[1].row][combination[1].column] &&
      currentGameBoard[combination[0].row][combination[0].column]===
      currentGameBoard[combination[2].row][combination[2].column]
    ){
      winner = currentGameBoard[combination[0].row][combination[0].column]
    }
  }

  if(!winner && currentGameProgress.length === 9){
    winner = 'Tie'
  }

  return (
    <>
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player
          defaultName="Player 1"
          symbol="X"
          activePlayer={currentActivePlayer}
        />
        <Player
          defaultName="Player 2"
          symbol="O"
          activePlayer={currentActivePlayer}
        />
      </ol>
      {winner && <GameOverScreen winner = {winner} rematchFunction = {handleRematchClicked}/>}
      <GameBoard
        activePlayer={currentActivePlayer}
        handleSquareClicked={handleBoardClicked}
        gameBoard={currentGameBoard}
      />
    </div>
    <Log progress = {currentGameProgress} />
    </>
  )
}

export default App
//App Successfully Deployed