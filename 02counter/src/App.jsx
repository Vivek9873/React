import { useState } from 'react'
import "./App.css"


function App() {

  // let counter = 15;
  let[counter,setCounter] = useState(15);
  function addvalue(){
    // setCounter((counter+1)<=20?(counter+1):(counter));
    // console.log("The value of counter after adding 1 is "+counter)

    // setCounter(counter+1);
    // setCounter(counter+1); // this method will only increase the counter by 1 because the all these counters update the same counter by 1; 
    // setCounter(counter+1);
    setCounter((prevCounter)=>(prevCounter+1)); //  this method will increase the counter by 2. As in this case the setcounter is using a call back function which basically takes the counter update it by 1;
    setCounter((prevCounter)=>(prevCounter+1));
  }
  function decreasevalue(){
  
    // setCounter((counter-1)>=0?(counter-1):(counter));
    if(counter-1>=0){
      counter -= 1;
    }
    setCounter(counter);
    // console.log("The value of counter after decreasing 1 is "+counter)
    
  }
  return (
    <>
      <h3>Counter : {counter}</h3>
      <button onClick={addvalue}>Add the counter:{counter}</button>
      <br />
      <button onClick={decreasevalue}>Decrease the counter:{counter}</button>
    </>
  )
}

export default App
