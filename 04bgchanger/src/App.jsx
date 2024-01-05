import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Button'

function App() {
  const [color,setColor] = useState("olive")

  return (
    <div className=' w-fulls h-screen duration-200  ' style={{backgroundColor:color}}>
      <div className='flex flex-wrap fixed justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2  rounded-3xl'>
          <button className='rounded-full shadow-lg py-1 text-white bg-red-600 outline-none px-4 ' onClick={()=>setColor("red")}>Red</button>
          <button className='rounded-full shadow-lg py-1 text-white bg-green-600 outline-none px-4 ' onClick={()=>setColor("green")}>green</button>
          <button className='rounded-full shadow-lg py-1 text-white bg-blue-600 outline-none px-4 ' onClick={()=>setColor("blue")}>blue</button>
          <button className='rounded-full shadow-lg py-1 text-black bg-slate-700 outline-none px-4 ' onClick={()=>setColor("olive")}>olive</button>
          <button className='rounded-full shadow-lg py-1 text-black bg-grey outline-none px-4 ' onClick={()=>setColor("grey")}>grey</button>
          <button className='rounded-full shadow-lg py-1 text-white bg-yellow-600 outline-none px-4 ' onClick={()=>setColor("yellow")}>yellow</button>
          <button className='rounded-full shadow-lg py-1 text-white bg-pink-600 outline-none px-4 ' onClick={()=>setColor("pink")}>pink</button>
          <button className='rounded-full shadow-lg py-1 text-white bg-purple-600 outline-none px-4 ' onClick={()=>setColor("purple")}>purple</button>
          <button className='rounded-full shadow-lg py-1 text-black bg-lavender outline-none px-4 ' onClick={()=>setColor("lavender")}>lavender</button>
          <button className='rounded-full shadow-lg py-1 text-black bg-white outline-none px-4 ' onClick={()=>setColor("white")}>white</button>
          <button className='rounded-full shadow-lg py-1 text-white bg-black outline-none px-4 ' onClick={()=>setColor("black")}>black</button>
        </div>
      </div>
    </div>
  )
}

export default App
