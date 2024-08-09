import { useState } from 'react'
import LoginDashboard from './Dashboard/Login/loginDashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LoginDashboard/>
    </>
    
  )
}

export default App
