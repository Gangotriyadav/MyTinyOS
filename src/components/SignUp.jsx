import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./style.css";

function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    if (!name || !email || !password) {
      alert("Please Fill All The Input Fields");
      return;
    }

    const payload = { email, password };

    axios
      .post("https://os-core.onrender.com/api/post", payload)
      .then((res) => {
        alert("Signup Success");
        console.log("Signup Success", res.data);

        const redirectURL = localStorage.getItem("redirectURL");
        if (redirectURL) {
          window.location.href = redirectURL;
        } else {
          navigate("/Login");
        }
      })

      .catch((err) => {
        alert("You are already registered. Please login.");
        navigate("/Login");

        console.error("Signup Error", err.response?.data || err.message);
      });
      
  };

  return (
    <div className="signUpContainer">
      <h1>SignUp Here</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Your First && Last Name"
      />{" "}
      <br />
      <br />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Your Email"
      />{" "}
      <br />
      <br />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Your Password"
      />{" "}
      <br />
      <br />
      <button onClick={handleSignup}>SignUp</button>
    </div>
  );
}

export default SignUp;
