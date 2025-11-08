import '../App.css'
import Entete from '../sous_composants/entete.tsx'
import Barre from '../sous_composants/barre_de_navigation.tsx'
import Btn from '../sous_composants/btnconnexion.tsx'
import Numeros from '../sous_composants/number.tsx'

function Verification() {

  return (
    <>
        <section className="flex flex-col items-center w-full justify-center gap-6 p-8 ">
            <div className='w-full bg-white'>
                <Entete label="finalisation" paragraph="inviter 04 amis pour finaliser l’inscription" />
            </div>
            <div className='w-full flex flex-col items-start justify-center bg-white gap-3 pt-5'>
                 <h2>Numeros de telephone</h2>
                <Numeros />
                <Numeros />
                <Numeros />
                <Numeros />

            </div>
            <div className='w-full flex flex-col items-center  bg-white gap-6 pt-5'>
                <Btn />
            </div>
            <div className='flex items-center justify-between gap-2 w-full pt-5'>
                <p>By clicking continue, you agree to our Terms of Service and Privacy Policy.</p>
            </div>
        </section>
            <div className=' flex gap-4 justify-between w-full items-center mt-25 text-white'>
                <Barre />
            </div>

    </>
  )
}

export default Verification
