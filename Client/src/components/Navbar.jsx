import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'

const Navbar = () => {
    const navigate = useNavigate();
    const { user } = useUser();
    const { openSignIn } = useClerk();
    return (
        <div className='fixed z-5 w-full backdrop-blur-2xl flex justify-between items-center
     py-3 px-4 sm:px-20 xl:px-32'>
            <img src={assets.logo} alt='logo' className='w-32 sm:w-44 cursor-pointer' onClick={() => {
                navigate('/')
            }} />

            {
                user ? <UserButton /> : (
                    <button
                        onClick={openSignIn} className='flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium px-5 py-2 cursor-pointer rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 active:scale-95'
                    >
                        Get started <ArrowRight className='w-4 h-4' />
                    </button>
                )
            }



        </div>
    )
}

export default Navbar
