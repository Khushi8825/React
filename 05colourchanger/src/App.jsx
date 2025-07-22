import {useState} from "react"
function App() {
  const [colour, setColour] = useState("olive")

  return (
    <>
    <div className="w-full h-screen"
    style={{backgroundColor:colour}}>
      <div className="fixed flex flex-wrap
      px-2 inset-x-0 justify-center bottom-12 rounded-xl"
      >
        <div className="flex flex-wrap justify-center gap-2 
        shadow-lg bg-white px-3 py-2 rounded-full">
          <button 
          onClick={()=>setColour("red")} 
          className="outline-none px-4 py-1 rounded-full bg-red-600
          shadow-xl text-white"
          >Red</button>
          <button 
          onClick={()=>setColour("blue")} 
          className="outline-none px-4 py-1 rounded-full bg-blue-700
          shadow-xl text-white"
          >blue</button>
          <button 
          onClick={()=>setColour("green")} 
          className="outline-none px-4 py-1 rounded-full bg-green-600
          shadow-xl text-white"
          >Green</button>
          <button
          onClick={()=>setColour("yellow")}
          className="outline-none px-4 py-1 rounded-full bg-yellow-400
          shadow-xl text-white"
          >Yellow</button>
          <button
          onClick={()=>setColour("pink")} 
          className="outline-none px-4 py-1 rounded-full bg-pink-200
          shadow-xl text-white"
          >Pink</button>
          <button 
          onClick={()=>setColour("gray")} 
          className="outline-none px-4 py-1 rounded-full bg-gray-600
          shadow-xl text-white"
          >Grey</button>
          <button 
          onClick={()=>setColour("orange")} 
          className="outline-none px-4 py-1 rounded-full bg-orange-400 
          shadow-xl text-white"
          >Orange</button>
          <button 
          onClick={()=>setColour("black")} 
          className="outline-none px-4 py-1 rounded-full bg-black
          shadow-xl text-white"
          >Black</button>
          

        </div>
      </div>
    </div>
    </>
  )
}

export default App
