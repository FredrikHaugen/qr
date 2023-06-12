import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar.jsx";
import HomePage from './components/Home.jsx';
import QRGenPage from './components/QrGen.jsx';
import DashboardPage from './components/Dashboard.jsx';

function App() {
  return (
    <div className="App scroll-smooth">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/qr-gen" element={<QRGenPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
