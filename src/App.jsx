import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Converter from "./pages/Converter.jsx";
import ChipChange from './components/ChipChange.jsx';

function App() {

  return (
    <Router>
      <Header />
      <main>
        <ChipChange />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/converter" element={<Converter />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
