import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/'
import Home from './pages/Home/'
import Pricing from './pages/Pricing/'
import About from './pages/About/'
import './App.css'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
