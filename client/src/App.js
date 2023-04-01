import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About/About";
import Approved from "./Pages/Approved/Approved";
import Contact from "./Pages/Contact/Contact/Contact";
import Register from "./Pages/Register/Register";
import Forgot from "./Pages/Forgot/Forgot";
import Donate from "./Pages/DonateBlood/Donate";
import Request from "./Pages/RequestBlood/Request";
import Footer from "./Pages/Home/Footer/Footer.jsx";
import Header from "./Pages/Home/Header/Header.jsx";
import Home from "./Pages/Home/Home/Home.jsx";
import Login from "./Pages/Login/Login";
import Service from "./Pages/Services/Service/Service";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/Blood-Bank-Management-System" element={<Home />} />
          <Route path="/Blood-Bank-Management-System/home" element={<Home />} />
          <Route path="/Blood-Bank-Management-System/about" element={<About />} />
          <Route path="/Blood-Bank-Management-System/service" element={<Service />} />
          <Route path="/Blood-Bank-Management-System/contact" element={<Contact />} />
          <Route path="/Blood-Bank-Management-System/register" element={<Register />} />
          <Route path="/Blood-Bank-Management-System/forgot" element={<Forgot />} />
          <Route path="/Blood-Bank-Management-System/approved" element={<Approved />} />
          <Route path="/Blood-Bank-Management-System/login" element={<Login />} />
          <Route path="/Blood-Bank-Management-System/donate" element={<Donate />} />
          <Route path="/Blood-Bank-Management-System/request" element={<Request />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
