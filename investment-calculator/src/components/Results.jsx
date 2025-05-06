import { calculateInvestmentResults } from "../util/investment"
import { formatter } from "../util/investment"

export default function Results({investment}) {

  const investmentObject = {
    initialInvestment: investment.initial,
    annualInvestment: investment.annual,
    expectedReturn: investment.expected,
    duration: investment.duration
  }


  const calculatedResults = calculateInvestmentResults(investmentObject)


  let currentInterest = 0
  const totalInterestPerYear = []
  const totalInvestedCapital = []
  let totalInvestment = 0
  for (const entry of calculatedResults) {
    currentInterest += entry.interest
    totalInterestPerYear.push(currentInterest)
    totalInvestment = (investment.initial) + (entry.annualInvestment * entry.year)
    totalInvestedCapital.push(totalInvestment)
  }

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest</th>
          <th>Total Interest</th>
          <th>Total Amount Invested</th>
        </tr>
      </thead>
      <tbody>
        {calculatedResults.length > 0 &&
          calculatedResults.map((entry, index) => (
            <tr key = {entry.year}>
              <td>{entry.year}</td>
              <td>{formatter.format(entry.valueEndOfYear)}</td>
              <td>{formatter.format(entry.interest)}</td>
              <td>{formatter.format(totalInterestPerYear[index])}</td>
              <td>{formatter.format(totalInvestedCapital[index])}</td>
            </tr>
          ))}
      </tbody>
    </table>
  )
}
