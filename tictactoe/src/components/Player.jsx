import { useState } from "react"

export default function Player({ defaultName, symbol, activePlayer }) {
  const [playerName, setPlayerName] = useState(defaultName)
  const [isEditing, setIsEditing] = useState(false)

  let buttonText = "Edit"
  let playerNameField = <span className="player-name">{playerName}</span>

  function handleEditButtonClicked() {
    setIsEditing((editing) => !editing)
  }
  function handleChange(event) {
    setPlayerName(event.target.value)
  }

  if (isEditing) {
    buttonText = "Save"
    playerNameField = (
      <input type="text" required value={playerName} onChange={handleChange} />
    )
  }

  return (
    <li className={activePlayer === symbol ? "active" : undefined}>
      <span className="player">
        {playerNameField}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditButtonClicked}>{buttonText}</button>
    </li>
  )
}
