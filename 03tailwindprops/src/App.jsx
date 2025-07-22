import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card.jsx'
// let myobj = {
//   username : "khushi",
//   age:14
// }

function App() {

  return (
    <>
    <h1 className="bg-green-400 text-black rounded-xl p-4 mb-4">Tailwind working</h1>   
    <Card title="props" changes="use props directly then for access use props._____ or directly use {---}"/>
    <Card title="default" changes="give default behaviour as you pass in function argument"/>
    <Card/>
    </>
  )
}

export default App
