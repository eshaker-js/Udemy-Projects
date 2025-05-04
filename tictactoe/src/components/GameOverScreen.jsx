

export default function GameOverScreen({winner, rematchFunction}){
  return(
    <div id='game-over'>
      <h2>Game Over!</h2>
      <p>{winner !== 'Tie' ? `${winner} Won!` : `it's a tie`}</p>
      <button onClick = {rematchFunction}>Rematch</button>
    </div>
  )
}