import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Login.module.css"; 

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim()!==""&& !isNaN(password)&&password !=="") {
      localStorage.setItem("isLoggedIn", "true");
      alert("Login Successful");
      navigate("/"); 
    } else {
      alert("Invalid username or password");
    }
  };

  const handleSkip = () => {
    localStorage.setItem("isLoggedIn", "true");
    alert("You skipped login!");
    navigate("/");
  };

  return (
    <div className={style.loginContainer}>
      <div className={style.loginBox}>
        <h2 className={style.title}>Hi! <br /> Welcome</h2>
        <p className={style.subtitle}>
          I’m waiting for you, please enter your details
        </p>

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username, Email or Phone Number"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={style.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={style.input}
          />

          <div className={style.options}>
            <label>
              <input type="checkbox" /> Remember Me
            </label>
            <a href="#" className={style.forgot}>Forgot Password?</a>
          </div>

          <button type="submit" className={style.loginBtn}>Log In</button>
          <button onClick={handleSkip} type="button" className={style.skipBtn}>
            Skip
          </button>
        </form>
      </div>
    </div>
  );
}
