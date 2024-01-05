import { useState,useCallback,useEffect,useRef } from 'react'


function App() {
  let [length,setLength] = useState(8); // This is used to change the value of length in user interface 
  let [numAllowed,setNumber] = useState(false);// This is for numbers require or not in password
  let [charAllowed,setChar] = useState(false);// Thisis for char
  let [password,setPassword] = useState(""); // this is for changing the password 


  // useState hook is used to change the ui
  // useCallback hook is used to optimize the code this basically stores the function in the memory 
  // The useCallback hook is a built-in hook in React that lets you memoize a callback function by preventing it from being recreated on every render.
  // useEffect hook is basicallly calls the function  when there is a change in the dependency 
  // The useEffect Hook allows you to perform side effects in your components
  // syntax useCallback((functin),[dependency])
  // syntax useEffect((function),[dependency])


  // The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
  const passwordGenerator = useCallback(()=>{
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pass = "";
    if(numAllowed){
      str +="0123456789";
    }
    if(charAllowed){
      str += "@#$%&*!^-+={}[]~?/\|";
    }
    for(let i = 1;i<=length;i++){
      let char = Math.floor(Math.random()*str.length +1);
      pass += str[char];

    }
    setPassword(pass);  // Setting the password 

  },[length,numAllowed,charAllowed])
  const passwordref = useRef(null);
  const copypasswordtoclipboard = useCallback(()=>{
    passwordref.current?.select();  // this basically select the current value of the reference
    // passwordref.current?.setSelectionRange(0,9); // this basically selects the current value of range(0,9)

    window.navigator.clipboard.writeText(password);//This is basically used to copy the password at the clipboard

  },[password])

  

  useEffect(()=>{
    passwordGenerator();
  },[length,numAllowed,charAllowed,passwordGenerator]);
 

  return (
    // text-xl for font ,text-color -- color , bg-color -- background color, w-1 -- width ,h -- height, m -- margin , p -- padding, rounded --- for round border, gap --- giving gap,  
    <>
      <div className='text-xl  text-orange-500 bg-yellow-800 max-w-2xl w-full mx-auto shadow-md rounded-lg my-20 px-4 '>
        <h2 className='text-white text-center py-3'>Password Generator</h2>
        <div className='flex rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password} readOnly ref={passwordref} className='outline-none w-full py-1 px-3' placeholder='Enter the Password' />
          <button onClick={copypasswordtoclipboard} className='bg-blue-500 text-white px-3 py-1 shrink-0 rounded-r-xl outline-none '>Copy</button>


        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-3'>

            <input type="range"  max={100} min={6} value={length} className='cursor-pointer' onChange={(e)=>(setLength(e.target.value))}/><label >Length:{length}</label>
            <input type="checkbox" value={numAllowed} onChange={()=>setNumber((prev)=>(!prev))} className='cursor-pointer' oncl/> <label >Numbers</label>
            <input type="checkbox"  defaultChecked={charAllowed} onChange={()=>setChar((prev)=>(!prev))} className='cursor-pointer'/> <label >Characters</label>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
