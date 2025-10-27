import { useState } from 'react'
import CarBookingLogin from './pages/CarBookingLogin';

function App() {
  const [count, setCount] = useState(0)

  return (
    <CarBookingLogin />
  )
}

export default App
