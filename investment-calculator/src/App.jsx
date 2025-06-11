import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results"
import { useState } from "react"

const NO_INVESTMENT = {
  initial: 0,
  annual: 0,
  expected: 0,
  duration: 0,
}

function App() {
  const [currentInvesmentPlan, setInvestmentPlan ] = useState(NO_INVESTMENT)

  function handleChangedInput(field, value) {
    setInvestmentPlan((previousInvestmentPlan) => {
      const newInvestmentPlan = {
        ...previousInvestmentPlan,
        [field]: +value,
      }
      return newInvestmentPlan
    })
  }

  return (
    <>
      <Header />
      <main>
        <div id="user-input">
          <div className="input-group">
            <UserInput identifier = 'initial' fieldName = 'Initial Investment' changeInvestmentPlan={handleChangedInput} />
            <UserInput identifier = 'annual' fieldName = 'Annual Investment' changeInvestmentPlan={handleChangedInput} />
          </div>
          <div className="input-group">
            <UserInput identifier = 'expected' fieldName = 'Expected Returns' changeInvestmentPlan={handleChangedInput} />
            <UserInput identifier = 'duration' fieldName = 'Duration' changeInvestmentPlan={handleChangedInput} />
          </div>
        </div>
        <Results investment={currentInvesmentPlan} />
      </main>
    </>
  )
}

export default App
// deployed