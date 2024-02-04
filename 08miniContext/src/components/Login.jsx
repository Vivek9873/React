import React,{useState,useContext} from 'react'
import UserContext from '../context/UserContext';

function Login() {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const {setUser} = useContext(UserContext);
    const handlename = (e)=>{
        e.preventDefault();
        setUser({username,password});
    }
  return (
    <div>
        <h2>Login</h2>
        <input type="text" 
        value={username}
        onChange={(e)=>setUsername(e.target.value)}  placeholder='Enter the username'/>
        <input type="text" value={password}
        onChange={(e)=>setPassword(e.target.value)} placeholder='Enter the password'/>
        <button onClick={handlename}>Submit</button>
    </div>
  )
}

export default Login