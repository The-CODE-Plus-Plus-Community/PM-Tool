'use client';

import { MagnifyingGlassIcon, UserCircleIcon } from '@heroicons/react/20/solid';
import React from 'react';
import Avatar from 'react-avatar';


function Header() {
  return (
    <div>
      <div className='flex flex-col md:flex-row items-center p-5 bg-gray-500/10 rounded-b-2xl'>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Trello_logo.svg/1280px-Trello_logo.svg.png"
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
      <div className='flex items-center justify-center px-5 md:py-5'>
        <p className="flex items-center p-5 text-sm font-light pr-5 shadow-xl rounded-xl w-fit bg-white italic max-w-3xl text-[#0055D1]">
          <UserCircleIcon className='inline-block h-10 w-10 text-[#0055D1] mr-1' />
          GPT is summarizing your tasks for the day...
        </p>
      </div>
    </div>

  )
}

export default Header