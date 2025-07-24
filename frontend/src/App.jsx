import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import CodeGenerator from './pages/CodeGenerator'

export default function App() {
  return (
    <Router>
      <div className="container">
        <nav className="sidebar">
          <h2>AI Code Reviewer</h2>
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
            Home
          </NavLink>
          <NavLink to="/codegenerator" className={({ isActive }) => (isActive ? 'active' : '')}>
            Code Generator
          </NavLink>
        </nav>
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/codegenerator" element={<CodeGenerator />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}


