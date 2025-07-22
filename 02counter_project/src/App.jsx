import { useState } from 'react'   //hook
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

 let [counter , settingCounter] = useState(15)  //hook counter -> variable which we van access throughout project                                               
 const addValue = ()=> {                        //     settingCounter -> function that update counter          
    // counter = counter + 1;   wrong way
    if(counter < 20){
      settingCounter(counter+1)
      /*general question asked isko hum duplicate krde toh 
      i.e settingCounter(counter+1)
          settingCounter(counter+1)
          settingCounter(counter+1)
          settingCounter(counter+1)
         ab kya aayega output on one click - 16
         abhi bhi output wahi aayega jo ek baar
         run krne pe aa raha tha kyu ye ek batch mein
         bhejta hai execute hone ko toh sare function ek hi value
         update krte hai ek dusre ka wait nhi krte 
         value update krna=e ka
      now if we want ki humhara value ek click ke 4times update ho
      so we will write like this
      .....settingCounter((prevCounter)=>prevCounter+1)
           settingCounter((prevCounter)=>prevCounter+1)
           settingCounter((prevCounter)=>prevCounter+1)
           settingCounter((prevCounter)=>prevCounter+1)
        output on one click - 19
        prevCounter gives previous Value in function
        ye prevCounter sirf name hai hum iski jagha kuc bhi use kr 
        sakhte hai bs syntax yehi hoga*/
    }
    else{
      alert("Limit Reached")
    }
 }
 const reduceValue = () => {
    // counter = counter - 1;  wrong way
    if(counter>0){
      settingCounter(counter-1);
    }
    else{
      alert('Negative count not accepted')
    }
 }
  return (
    <>
      <h1>Count value: {counter}</h1>
      <button onClick={addValue} //disabled={counter === 20}  //this will disable the button-button will be not clicked now
      >add value</button>
      <br/>
      <button onClick ={reduceValue} //disabled={counter === 0}  //this will disable the button-button will be not clicked now
      >sub value</button>
    </>
  )
}

export default App
