import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(){
  return (
    <header className="header-gradient">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary" />
          <div className="text-lg font-display text-primary">Pairing</div>
        </Link>
        <nav className="flex items-center gap-4">
          <Link to="/" className="text-sm text-secondary">Accueil</Link>
          <Link to="/dashboard" className="text-sm text-secondary">Dashboard</Link>
          <button className="px-4 py-2 card text-white" style={{backgroundColor:'var(--primary)'}}>Connexion</button>
        </nav>
      </div>
    </header>
  )
}
