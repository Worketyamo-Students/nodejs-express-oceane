import React from 'react'
import { FaStar } from 'react-icons/fa'

function PairingCard({ item }){
  return (
    <div className="card p-4 mb-3">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gray-200" />
        <div>
          <div className="font-semibold">{item.name}</div>
          <div className="text-sm text-gray-500">{item.title} • {item.location}</div>
        </div>
        <div className="ml-auto text-right">
          <div className="text-sm">Compatibilité</div>
          <div className="text-lg font-bold">{item.score}%</div>
        </div>
      </div>

      <div className="mt-3 text-sm text-gray-600">
        <div><strong>Compétences:</strong> {item.skills.join(', ')}</div>
        <div className="mt-2">{item.brief}</div>
      </div>

      <div className="mt-3 flex gap-2">
        <button className="px-3 py-2 text-sm card" style={{backgroundColor:'var(--primary)', color:'white'}}>Contacter</button>
        <button className="px-3 py-2 text-sm border card">Voir profil</button>
        <div className="ml-auto flex items-center gap-1 text-yellow-500"><FaStar/> Premium</div>
      </div>
    </div>
  )
}

export default function PairingList({ items }){
  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-xl font-semibold">Suggestions pour vous</h3>
        <div className="text-sm text-gray-500">Filtrer • Trier</div>
      </div>
      {items.map(i => <PairingCard key={i.id} item={i} />)}
    </div>
  )
}
