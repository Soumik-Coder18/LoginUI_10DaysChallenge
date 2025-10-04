import { useState } from 'react'
import MedicalLogin from './pages/medical_login';

function App() {
  const [count, setCount] = useState(0)

  return (
    <MedicalLogin />
  )
}

export default App
