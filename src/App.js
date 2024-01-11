import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import MyContainer from './components/MyContainer'
import About from './components/About'
import Header from './components/Header'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div style={{marginBottom: 90}}></div>
        <Routes>
          <Route path="/" element={<MyContainer />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
