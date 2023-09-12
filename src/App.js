import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Menu from "./pages/menu/Menu";
import Signin from "./pages/signin/Signin";
import Login from "./pages/login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
