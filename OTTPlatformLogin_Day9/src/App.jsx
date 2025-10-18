import { useState } from 'react'
import CineVerseStreaming from './pages/CineVerseStreaming';

function App() {
  const [count, setCount] = useState(0)

  return (
    <CineVerseStreaming/>
  )
}

export default App