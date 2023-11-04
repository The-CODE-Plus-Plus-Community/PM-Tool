'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import React from 'react';
import Avatar from 'react-avatar';


function Header() {
  return (
    <div className='flex flex-col md:flex-row items-center p-5 bg-gray-500/10 rounded-b-2xl'>
        <img
            src = "https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Trello_logo.svg/1280px-Trello_logo.svg.png"
            alt="Trello Logo"
            className='w-44 md:w-56 pb-10 md:pb-0 object-contain'
            width={100}
        />
        <div className='flex items-center space-x-5 flex-1 justify-end w-full'>
            <form className='flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial'>
                <MagnifyingGlassIcon className="h-5 text-gray-400" />
                <input type="text" placeholder='Search' className='flex-1 outline-none p-2' />
                <button hidden type="submit">Search</button>
            </form>

            <Avatar name='Subhampreet mohanty' round color='#0055D1' size="50" />
        </div>
    </div>
  )
}

export default Header