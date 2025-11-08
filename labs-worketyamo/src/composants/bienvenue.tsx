import '../App.css'
import Entete from '../sous_composants/entete.tsx'
import Barre from '../sous_composants/barre_de_navigation.tsx'
import Btn from '../sous_composants/btnconnexion.tsx'
import photo from '/public/images 2.png'
function Welcome() {

  return (
    <>
        <section className="flex flex-col items-center w-full justify-center gap-6  ">
            <div className='w-full bg-white'>
                <Entete label="Bienvenue" paragraph="Plus que 3 petites minutes ........" />
            </div>
            <div className='w-full flex  justify-center bg-white '>
                <img src={photo} alt="" />
            </div>
            <div className='w-full flex flex-col items-center  bg-white gap-6 pt-5'>
                <Btn />
            </div>
            <div className='flex items-center justify-between gap-2 w-full pt-5'>
                <p>By clicking continue, you agree to our Terms of Service and Privacy Policy.</p>
            </div>
        </section>
            <div className=' flex gap-4 justify-between w-full items-center pt-65 text-white'>
                <Barre />
            </div>

    </>
  )
}

export default Welcome
