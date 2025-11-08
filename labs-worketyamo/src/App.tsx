import './App.css'
import {Routes , Route, BrowserRouter as Router} from 'react-router-dom'
import Connexion from './composants/createcompte.tsx'
import Verification from './composants/verification.tsx'
import Finalisation from './composants/finalisation.tsx'
import Welcome from './composants/bienvenue.tsx'
function App() {

  return (
    <>
      <section className=' flex flex-col items-center justify-center '>
        <Router>
          <Routes>
            <Route path="/" element={<Connexion />} />
            <Route path="/verification" element={<Verification />} />
            <Route path="/finalisation" element={<Finalisation />} />
            <Route path="/welcome" element={<Welcome />} />

          </Routes>
        </Router>
      </section>
    </>
  )
}
export default App
