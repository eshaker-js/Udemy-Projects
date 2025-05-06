export default function Header(){
  return (
    <header id ='header'>
      <img src={import.meta.env.BASE_URL + '/investment-calculator-logo.png'} alt='Picture of money bag' />
      <h1>React Investment Calculator</h1>
    </header>
  )
}