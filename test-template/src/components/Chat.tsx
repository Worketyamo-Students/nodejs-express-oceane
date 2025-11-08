import React from 'react'

export default function Chat({ conversations }){
  const convo = conversations[0] // show first for demo
  return (
    <div className="card p-4 h-full flex flex-col">
      <div className="font-semibold mb-2">Messages</div>
      <div className="flex-1 overflow-auto mb-3 p-2 space-y-2" style={{maxHeight: '400px'}}>
        {convo.messages.map((m, idx) => (
          <div key={idx} className={`p-2 rounded ${m.me ? 'bg-primary text-white ml-auto' : 'bg-gray-100 text-gray-800'}`} style={{maxWidth:'75%'}}>
            <div className="text-sm">{m.text}</div>
            <div className="text-xs text-gray-500 mt-1">{m.ts}</div>
          </div>
        ))}
      </div>

      <div className="mt-2 flex gap-2">
        <input className="flex-1 px-3 py-2 rounded border" placeholder="Écrire un message..." />
        <button className="px-4 py-2 card" style={{backgroundColor:'var(--primary)', color:'white'}}>Envoyer</button>
      </div>
    </div>
  )
}
