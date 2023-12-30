// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/loginpage/login";
import HomePage from "./pages/homepage/home";
import Navbar from "./Components/navbar";
import Form from "./pages/formpage/Form";
// import Image from "./Components/image";

function App() {
  return (
    
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/form" element={<Form />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
