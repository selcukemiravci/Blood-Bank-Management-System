import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Context/AuthProvider";
import About from "./Pages/About/About/About";
import Approved from "./Pages/Approved/Approved";
import Contact from "./Pages/Contact/Contact/Contact";
import Register from "./Pages/Register/Register";
import Forgot from "./Pages/Forgot/Forgot";
import Donate from "./Pages/DonateBlood/Donate";
import Request from "./Pages/RequestBlood/Request";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Footer from "./Pages/Home/Footer/Footer.jsx";
import Header from "./Pages/Home/Header/Header.jsx";
import Home from "./Pages/Home/Home/Home.jsx";
import Login from "./Pages/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
import Service from "./Pages/Services/Service/Service";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot" element={<Forgot />} />
            <Route path="/approved" element={<Approved />} />
            <Route path="/login" element={<Login />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/request" element={<Request />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
