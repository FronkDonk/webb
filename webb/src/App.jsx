import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/Contexts/AuthContext";
import { useState } from "react";
import "./App.css";
import Contact from "./components/Layout/Contact/InputForm";
import Home from "./Pages/Home";
import LogInForm from "./components/Layout/LogIn/LogInForm";
import SignUpForm from "./components/Layout/LogIn/SignUpForm";
import DashBoard from "./Pages/DashBoard";
import PrivateRoute from "./PrivateRoute";
import ResetPassword from "./components/Layout/LogIn/ResetPassword";

function App() {
  const [navStyle, setNavStyle] = useState(false);

  return (
    <>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/sign-in" element={<LogInForm />} />
            <Route path="/sign-up" element={<SignUpForm />} />
            <Route path="/reset" element={<ResetPassword />} />
            <Route path="/dashboard" element={<PrivateRoute><DashBoard/></PrivateRoute>} />
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
