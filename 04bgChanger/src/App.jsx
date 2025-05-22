import { useState } from "react"

function App() {

  // dark color -> #7
  const [color, setColor] = useState("#2F4F4F");

  const settingColor = () => {
    setColor("black");
  }

  return (
    
    <div className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    > 
    <p className="text-center p-64 text-3xl text-white font-semibold ">Backgorund Color Changer</p>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0  px-2">

        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl" >
          
          <button
          onClick={()=> setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
          style={{ backgroundColor: "red" }}
          >Red
          </button>

          <button onClick={() => setColor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
            style={{ backgroundColor: "green" }}
          >Green
          </button>

          <button onClick={() => setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{ backgroundColor: "blue" }}
          >Blue
          </button>

          <button onClick={() => setColor("yellow")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
            style={{ backgroundColor: "yellow", color: "black" }}
          >
            Yellow
          </button>

          <button onClick={() => setColor("aquamarine")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
            style={{ backgroundColor: "#7FFFD4", color: "black" }}
          >
            Aquamarine
          </button>

          <button 
          onClick={settingColor}
            className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>

          <button 
          onClick={()=> setColor("#663399")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
            style={{ backgroundColor: "RebeccaPurple" }}
          >
            RebeccaPurple
          </button>

          <button 
          onClick={()=> setColor("#FF6347")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
            style={{ backgroundColor: "#FF6347" }}
          >
            Tomato
          </button>
        </div>
      </div>
    </div>
  )

}

export default App
