import { useState } from 'react'
import FoodLogin from './pages/food_login';

function App() {
  const [count, setCount] = useState(0)

  return (
    <FoodLogin />
  )
}

export default App
