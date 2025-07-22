import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const[numberAllowed, setNumberAllowed] = useState(false);
  const[charAllowed, setCharAllowed] = useState(false);
  const[password, setPassword] = useState("");

  const passwordRef = useRef(null)
  const passwordGenerator= useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "{}[]()#@*&"

    for(let i =1; i <= length; i++){
        let char = Math.floor(Math.random()* str.length+1)
        pass += str.charAt(char)
    }
    setPassword(pass)
  },[length,numberAllowed,charAllowed])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 9);
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=> {
    passwordGenerator()
  },[length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg
     px-4 my-8 text-white-100 bg-gray-400'>
      <h2 className='text-black text-center px-6 my-3'>Password Generator</h2>
        <div className='flex flex-wrap justify-center gap-2 shadow rounded-lg
        overflow-hidden mb-4'>
          <input
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3 my-3 rounded-lg'
          placeholder='password'
          readOnly
          ref = {passwordRef}/>

          <button
          onClick = {copyPasswordToClipboard}
          className='rounded-lg outline-none bg-blue-700 text-white'>copy</button>
          </div>
          <div classname='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input
              type="range"
              min={8}
              max={50}
              className="cursor-pointer"
              onChange={(e)=>{setLength(e.target.value)}}/>
              <label>Length:{length}</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                if="numberInput"
                onChange={() => {
                  setNumberAllowed((prev)=>!prev);
                }}
              />
              <label>number</label>
              <input
                type="checkbox"
                defaultChecked={charAllowed}
                if="charInput"
                onChange={() => {
                  setCharAllowed((prev)=>!prev);
                }}
              />
              <label>character</label>
            </div>

          </div>
     </div>

    </>
  )
}

export default App
