import { useState } from "react"

export default function UserInput({identifier,fieldName, changeInvestmentPlan}) {
  const [currentValue, setCurrentValue] = useState(0)

  function handleChangedInput(event) {
    setCurrentValue(event.target.value)
    changeInvestmentPlan(identifier, event.target.value)
  }

  return (
    <div>
      <label>{fieldName}</label>
      <input
        type="number"
        required
        onChange={handleChangedInput}

        value={currentValue}
      />
    </div>
  )
}
