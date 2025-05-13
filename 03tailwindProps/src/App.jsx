import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-green-400 text-gray-700 rounded-xl p-4 '>Tailwind test</h1>
    <div className="card bg-base-100 w-96 shadow-sm mt-6">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere quidem itaque illo in est. Nihil a quae voluptas!</p>
          <div className="card-actions mt-2 justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
