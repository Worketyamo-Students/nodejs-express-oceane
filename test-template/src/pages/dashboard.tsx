import React from 'react'
import ProfileCard from '../components/ProfileCard'
import PairingList from '../components/PairingList'
import Chat from '../components/Chat'
import sample from '../data/sample'

export default function Dashboard(){
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
      <aside className="lg:col-span-1">
        <ProfileCard user={sample.user} />
        <div className="card p-4 mt-4">
          <h4 className="font-semibold mb-2">Statistiques</h4>
          <div className="text-sm text-gray-600">Pairings ce mois: <strong>12</strong></div>
          <div className="text-sm text-gray-600">Taux moyen de compatibilité: <strong>78%</strong></div>
        </div>
      </aside>

      <section className="lg:col-span-2">
        <PairingList items={sample.pairings} />
      </section>

      <aside className="lg:col-span-1">
        <Chat conversations={sample.conversations} />
      </aside>
    </div>
  )
}
