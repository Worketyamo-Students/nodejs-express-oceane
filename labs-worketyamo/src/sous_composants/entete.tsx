import React from 'react'
import '../App.css'
import logo from '/public/Group 28.png'
type EnteteProps = {
    label : string
    paragraph: string
};
const Entete: React.FC<EnteteProps> = ({ label , paragraph}) => {

  return (
    <>
        <div className='flex flex-col items-center  gap-4 justify-center  '>
            <img src={logo} alt="Logo"  className='w-60'/>
            <div className='flex flex-col items-center gap-5'>
                <h1 className='text-2xl font-bold capitalize'>{label}</h1>
                <p>{paragraph}</p>
            </div>
        </div>
    </>
  )
}       

export default Entete
