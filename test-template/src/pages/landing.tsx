import React from 'react'
import { Link } from 'react-router-dom'

export default function Landing(){
  return (
    <div className="max-w-6xl mx-auto">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12">
        <div>
          <h1 className="text-4xl font-display text-primary mb-4">Trouve ton mentor ou tuteur en quelques clics</h1>
          <p className="text-gray-600 mb-6">Pairing intelligent alimenté par IA — matching par compétences, disponibilité et préférence locale.</p>
          <div className="flex gap-3">
            <Link to="/dashboard" className="px-5 py-3 card text-white" style={{backgroundColor:'var(--primary)'}}>Essayer gratuitement</Link>
            <a href="#pricing" className="px-5 py-3 border card text-secondary">Découvrir les tarifs</a>
          </div>
        </div>
        <div className="card p-6">
          <h3 className="text-xl font-medium mb-3">Exemple de pairing</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full" />
              <div>
                <div className="font-semibold">Alice N.</div>
                <div className="text-sm text-gray-500">Data scientist — Yaoundé</div>
              </div>
              <div className="ml-auto text-sm text-gray-700">Compatibilité: <span className="font-bold">92%</span></div>
            </div>
            <div className="bg-lightgray p-3 rounded">
              <div className="text-sm text-gray-600">Pourquoi ce pairing ?</div>
              <div className="text-sm">Compétences similaires en Python & ML, disponibilité soirs semaine, expérience tutoring.</div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="card p-6">
          <h4 className="font-semibold mb-2">Matching IA</h4>
          <p className="text-sm text-gray-600">Embeddings texte + règles métiers</p>
        </div>
        <div className="card p-6">
          <h4 className="font-semibold mb-2">Messagerie</h4>
          <p className="text-sm text-gray-600">Conversations privées et historique</p>
        </div>
        <div className="card p-6">
          <h4 className="font-semibold mb-2">Premium</h4>
          <p className="text-sm text-gray-600">Priorisation et analytics avancées</p>
        </div>
      </section>
    </div>
  )
}
