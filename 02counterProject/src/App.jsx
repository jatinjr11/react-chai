import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Ram Ram</h1>
      <h2>Counter Value: 5</h2>

      <button>Add Value</button>
      <br />
      <button className="btn btn-primary">Remove Value</button>
    </>
  )
}

export default App
