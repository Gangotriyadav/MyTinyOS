import Login from "./components/Login"
import Operating from "./components/Operating"
import SignUp from "./components/SignUp"

import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      {/* <nav>
        <Link to="/">Operating</Link>||
        <Link to="/Login">Login</Link> || 
        <Link to="/SignUp">SignUp</Link> 
      </nav> */}

      <Routes>
        <Route path="/" element={<Operating />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
