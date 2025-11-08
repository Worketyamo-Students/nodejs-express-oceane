import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './pages/landing'
import Dashboard from './pages/dashboard'
import Navbar from './components/navbar'

export default function App(){
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <main className="p-6">
          <Routes>
            <Route path="/" element={<Landing/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}
