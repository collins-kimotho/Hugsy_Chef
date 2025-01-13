import React from 'react'
import chef from '../assets/cooking.png'
import { useState } from 'react'

const Header = () => {

  

  return (
    <header className="flex items-center justify-center gap-8 bg-gray-200 h-20 shadow-md">
        <img 
            src={chef} 
            alt="" 
            className="" 
            width={50}
        />
        <h1 className="font-serif font-bold text-lg">Chef Claude</h1>
    </header>
  )
}

export default Header