import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const addValue = () => {
    if(count < 20)
    {
      setCount(count + 1); // setCount((prevCount) => prevCount + 1)
    }
  }

  const removeValue = () => {
    if(count > 0){
      setCount(count - 1); // setCount((prevCount) => prevCount - 1)
    }
  }

  return (
    <>
      <h2>Counter Value: {count}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
