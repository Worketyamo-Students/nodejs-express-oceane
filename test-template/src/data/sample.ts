const sample = {
  user: {
    name: 'Vous',
    role: 'Étudiant',
    location: 'Yaoundé',
    skills: ['Maths', 'Physique', 'Anglais'],
    availability: 'Soirs semaine'
  },
  pairings: [
    {
      id: 'p1',
      name: 'Alice Nana',
      title: 'Data Scientist',
      location: 'Yaoundé',
      score: 92,
      skills: ['Python','ML','DataViz'],
      brief: '3 ans d’expérience en tutorat, flexible soirs'
    },
    {
      id: 'p2',
      name: 'Jean Paul',
      title: 'Ingénieur Logiciel',
      location: 'Douala',
      score: 84,
      skills: ['Node.js','React','Testing'],
      brief: 'Expérience en projets open-source, orienté pratique'
    }
  ],
  conversations: [
    {
      id: 'c1',
      messages: [
        { me: false, text: 'Bonjour, je suis disponible pour t’aider ce soir.', ts: '08:30' },
        { me: true, text: 'Super — à quelle heure ?', ts: '08:31' },
        { me: false, text: '20h - on peut faire une session de 1h.', ts: '08:32' }
      ]
    }
  ]
}

export default sample
