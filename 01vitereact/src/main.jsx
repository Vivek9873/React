import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
  return(
    <div>
      <h2>HEllo how are you</h2>
    </div>
  )
}  // We can also use this function to render its values

const ReactElement = {
  type:"a",
  props:{
      href:"https://google.com",
      target:"_blank",
  },
  children:"Click me to visit google",
}; // we can't render this object as react has different keys of this object hence it will give error
const ReactElement1 = (
  <a href="https://google.com" target="_blank">Visit Google</a>
) // we can use the object in this way by writing the html so that we can render it in the main html
const anotherElement = "Hello MOTO";
const ReactElement2 = React.createElement(
  'a',
  {href:"https://google.com",
  target : "_blank",},
  "Visit the most popular website",
  anotherElement


) // This is the actual an object can be rendered using react.create element;
ReactDOM.createRoot(document.getElementById('root')).render(

  // <React.StrictMode>
  // MyApp()
  <App />,
  <MyApp />
  // ReactElement2
  // </React.StrictMode>,
)
  
  // Here we can see that we can run the website without React.StrictMode tag without any error 
  // we should make a new js file in this folder with the name.jsx. If we don't make it like this then it will throw error 
  // the first letter of the funciton name should be capital
//   *  Filename: Capitalize e.g. Chai
//  * File Extension: Always .jsx
// * It doesn't matter if I return JSX or only Vanilla JS.  It simplifies my coding life a bit.