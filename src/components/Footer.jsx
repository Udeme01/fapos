import React from 'react'
import { Instagram, Twitter, Facebook } from 'lucide-react'

const Footer = () => {
  return (
    <footer className='bg-blue text-white text-center py-6'>
        <h1 className='font-bold text-lg'>
            Let's build something great together
        </h1>
        <p className=''>&copy; 2025 Faposs West Africa Ltd.</p>
        <hr className='my-8' />
        <ul className='flex items-center justify-center gap-3 p-3'>
            <li>
                <a href='#' className='text-yellow'>
                    <Instagram />
                </a>
            </li>
            <li>
                <a href='#' className='text-yellow'>
                    <Facebook />
                </a>
            </li>
            <li>
                <a href='#' className='text-yellow'>
                    <Twitter />
                </a>
            </li>
        </ul>
    </footer>
  )
}

export default Footer