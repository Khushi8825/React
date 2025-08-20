import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { Input } from './components';

function App() {
  const [count, setCount] = useState(0)
  const style = {display:"flex" , justifyContent : "center", alignItems: 'center', flexDirection:'column', width: 250, backgroundColor: 'purple', borderRadius: '12px'}
  return (

       <div>
      {/* //   <div style = {style}>
      //      <p style={{textAlign: 'center'}}>TODO</p>
      //      <input type='text' placeholder='Add Task' style={{backgroundColor:'grey', height: 20, width: '90%', color:'white', borderRadius:'12px', marginLeft: 5, marginBottom:5, marginRight: 5, border: '2px solid black'}}/>
      //   </div> */}
      <Input/>
      </div>
  )
}

export default App
