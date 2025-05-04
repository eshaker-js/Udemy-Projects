export default function Log({progress}) {
  return (
  <ol id="log">
    {progress.map((progressEntry, index) => (
      <li key = {progress.length - index}>{progressEntry.player} placed at {progressEntry.square.row},{progressEntry.square.col}</li>
    )) }
  </ol>
  )
}
