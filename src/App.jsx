import { Route, Routes, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalStyles } from "./styles/globalStyles";
import Login from "./pages/Login/Login";
import RegisterPage from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <div className="App font-inter">
      <GlobalStyles />
      <ToastContainer position="top-right" autoClose={2500} />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
