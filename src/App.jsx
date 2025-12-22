import Header from './components/header/header'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count +1)
  }

  return (
    <>
    <Header />
    <button onClick={handleClick}>Clicked {count} times</button>
    </>
  )
}

export default App
