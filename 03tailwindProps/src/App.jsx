import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  let myObj = {
    username: "sachin",
    age: 23
  }

  let newArray = [1,2,3];


  return (
    <>
      <h1 className='bg-green-400 text-gray-700 rounded-xl p-4 '>Tailwind test</h1>
     <Card username="sita"  someObj={myObj} arr={newArray}/>
     <Card  btnText="Click" />
    </>
  )
}

export default App
