import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import SpecificPage from './components/coins-specific/SpecificPage'

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/specific" element={<SpecificPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
