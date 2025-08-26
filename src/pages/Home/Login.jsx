import { useState } from "react"
import { useNavigate } from "react-router-dom"


export default function Login() {
const [username ,setUsername]=useState("")
const [password,setPassword]=useState("")
const navigate=useNavigate();
const handleLogin=(e)=>{e.preventDefault();
    if(username==="admin"&& password==="1234"){
        localStorage.setItem("isLoggedIn","true");alert("Login Successful");
        navigate ("/home")
    }else{
        alert ("invalid username or Password")
    }
};
  const handleSkip=()=>{
    localStorage.setItem("isLoggedIn","true");
    alert("You skipped login!")
    navigate("/home")
  }
  return (
    <div className="logincontainer">
      <form className="login box" onSubmit={handleLogin}> 
        <h2>Login</h2> 
        <input tyep="text"
        placeholder="Username"
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        />
        <input
        type="text"
        placeholder="Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />
        <button tyep= "submit">Login</button>
        <button onClick={handleSkip} type="button">Skip</button>
         </form>
    </div>
  );
}

