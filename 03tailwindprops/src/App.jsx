import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '../../01vitereact/src/components/cards'

function App() {
  const [count, setCount] = useState(0)
  let myobj = {name:"chai",age:21};
  let name = "VIVEK";
  return (
    <>
    <h1 className='text-black bg-green-400 rounded-xl p-4 mb-4'>Tailwind CSS</h1>
    <Card username="Vivek" btnText="Click on Me"/>
    <Card username="Dhoni" btnText="Visit me" />
    <Card username={name}  />

    </>
  )
}

// in the card tag we can't give an array or obj in the form like this
// <Card someobj = {name:"chai",age:21}/> or we also can't give an array in this form
// we also can't pass the variable name of object or array name  like this
// same is applicable for a variable;
// for this we have to apply currly brackets 

export default App
