import { useState } from 'react'
import MusicStreamingLogin from './pages/MusicStreamingLogin';

function App() {
  const [count, setCount] = useState(0)

  return (
    <MusicStreamingLogin/>
  )
}

export default App