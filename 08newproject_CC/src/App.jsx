import { useState } from 'react'
import { useEffect } from 'react'
import './App.css';


function App() {
  const [colour, setColor] = useState("black")
  function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
  function change(){
    setColor(getRandomColor())
  }
  useEffect(function(){
    const interval = setInterval(change,1000);

    return() => clearInterval(interval);
  },[])

  return (
    <>
    <div className='fullscreen' style={{backgroundColor:colour}}>
      Color Changer
    </div>
    </>
  )
}

export default App
