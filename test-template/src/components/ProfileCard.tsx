import React from 'react'

export default function ProfileCard({ user }){
  return (
    <div className="card p-4">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-gray-200" />
        <div>
          <div className="font-semibold">{user.name}</div>
          <div className="text-sm text-gray-500">{user.role} • {user.location}</div>
        </div>
      </div>

      <div className="mt-4 text-sm text-gray-600">
        <div><strong>Compétences:</strong> {user.skills.join(', ')}</div>
        <div className="mt-2"><strong>Disponibilité:</strong> {user.availability}</div>
      </div>

      <div className="mt-4 flex gap-2">
        <button className="flex-1 px-3 py-2 text-sm card" style={{backgroundColor:'var(--primary)', color:'white'}}>Editer profil</button>
        <button className="px-3 py-2 text-sm border card">Premium</button>
      </div>
    </div>
  )
}
