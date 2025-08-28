import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./style.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please fill all the input fields");
      return;
    }

    const payload = { email, password };

    axios
      .post("https://os-core.onrender.com/login", payload)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        alert("Login Success");
        console.log("Login Successful", res);
        const redirectURL =
          localStorage.getItem("redirectURL") ||
          "https://gangotriyadav.github.io/Calculator/";
        window.location.href = redirectURL;
      })
      .catch((err) => {
        alert("Login Failed SignUp First");
        navigate('/SignUp');
        console.log("Login Failed", err);
      });
  };

  return (
    <div className="loginContainer">
      <h1>Login Here</h1>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Your Email"
      />
      <br />
      <br />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Your Password"
      />
      <br />
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
