import { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/apiCalls";

const Login = () => {
  const [email, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch() 



  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { email, password });
  }; 


  // useEffect((e)=>{
  //     e.preventDefault()
  // },[localStorage.getItem('persist:root')])


  

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <input
        style={{ padding: 10, marginBottom: 20 }}
        type="text"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        style={{ padding: 10, marginBottom: 20 }}
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleClick} style={{ padding: 10, width:100 }}>
        Login
      </button>
    </div>
  );
};

export default Login;