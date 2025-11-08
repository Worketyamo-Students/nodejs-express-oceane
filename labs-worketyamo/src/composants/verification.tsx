import '../App.css'
import Entete from '../sous_composants/entete.tsx'
import Barre from '../sous_composants/barre_de_navigation.tsx'
import Btn from '../sous_composants/btnconnexion.tsx'

function Verification() {

  return (
    <>
        <section className="flex flex-col items-center w-full justify-center gap-8  ">
            <div className='w-full bg-white'>
                <Entete label="Verification OTP" paragraph="Rentrez vos infos pour vous connecter." />
            </div>
            <div className=' w-full flex items-center justify-center bg-white gap-2 '>
                <div className='bg-border rounded-lg flex-1 w-16 h-16 border border-text'></div>
                <div className='bg-border rounded-lg flex-1 w-16 h-16 border border-text'></div>
                <div className='bg-border rounded-lg flex-1 w-16 h-16 border border-text'></div>
                <div className='bg-border rounded-lg flex-1 w-16 h-16 border border-text'></div>

            </div>
            <div className='w-full flex flex-col items-center  bg-white gap-6 pt-5'>
                <Btn />
            </div>
            <div className='flex items-center justify-between gap-2 w-full pt-5'>
                <p>By clicking continue, you agree to our Terms of Service and Privacy Policy.</p>
            </div>
        </section>
            <div className=' flex gap-4 justify-between w-full items-center mt-60 text-white'>
                <Barre />
            </div>

    </>
  )
}

export default Verification
