import React from 'react'
import { FiSearch } from "react-icons/fi";

const Search = () => {
  return (
    <div className='flex items-center'>
        <input 
          type="text" 
          placeholder='Search...'
          className='h-full'
          />
          <div className='w-full h-full bg-slate-100 border flex items-center px-2'>
            <FiSearch style={{ fontSize: '1.5em' }}/>
          </div>
    </div>
  )
}

export default Search