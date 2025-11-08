import '../App.css'
import Entete from '../sous_composants/entete.tsx'
import Barre from '../sous_composants/barre_de_navigation.tsx'
import git from '/public/Vector.png'
import google from '/public/Frame 22.png'
import Btn from '../sous_composants/btnconnexion.tsx'
function Connexion() {

  return (
    <>
        <section className="flex flex-col items-center w-full justify-center  p-8 ">
            <div className='w-full bg-white'>
                <Entete label="Connexion" paragraph="Rentrez vos infos pour vous connecter." />
            </div>
            <div className=' w-full flex flex-col items-center justify-center bg-white'>
                <form action="" className='flex flex-col gap-4  w-full'>
                    <div className='items-start gap-4 flex flex-col w-full'>
                        <label>Email:</label>
                        <div className='w-full'>
                            <input type="email"  placeholder='votreemail@gmail.com' required className='border border-gray-300 p-2 rounded  outline-none w-full focus:ring-2 focus:ring-blue-500' />
                        </div>
                    </div>
                    <div className='items-start gap-4 flex flex-col w-full'>
                        <label htmlFor="password">Mot de passe:</label>
                        <div className='w-full'>
                            <input type="password" id="password" name="password" required className='border border-gray-300 p-2 rounded outline-none w-full focus:ring-2 focus:ring-blue-500' />
                        </div>
                    </div>
                </form>
            </div>
            <div className='flex items-center justify-between gap-2 w-68 pt-5'>
                <hr className='w-22'/>
                <p>ou avec</p>
                <hr className='w-22' />
            </div>
            <div className='w-full flex flex-col items-center justify-center bg-white gap-6 pt-5'>
                        <div className='w-full  '>
                            <button  className='border border-gray-300 p-2 rounded w-full flex gap-2 items-center justify-center focus:ring-2 focus:ring-blue-500'><img src={git} alt="" /> Github</button>
                        </div>
                        
                        <div className='w-full'>
                            <button  className='border border-gray-300 p-2 rounded w-full flex gap-2 items-center justify-center focus:ring-2 focus:ring-blue-500'><img src={google} alt="" /> Github</button>
                        </div>
            </div>
            <div className='w-full flex flex-col items-center justify-center bg-white gap-6 pt-5'>
                <Btn />
            </div>
            <div className='flex items-center justify-between gap-2 w-full pt-5'>
                <p>By clicking continue, you agree to our Terms of Service and Privacy Policy.</p>
            </div>
            <div className='flex gap-4 justify-between w-full items-center mt-25  text-white'>
                <Barre />
            </div>
        </section>
    </>
  )
}

export default Connexion
