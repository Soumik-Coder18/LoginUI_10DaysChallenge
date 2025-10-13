import { useState } from 'react'
import RetroStockTerminal from './pages/RetroStockTerminal';

function App() {
  const [count, setCount] = useState(0)

  return (
    <RetroStockTerminal/>
  )
}

export default App
