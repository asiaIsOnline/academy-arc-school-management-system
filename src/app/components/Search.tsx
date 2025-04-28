import React from 'react'
import { FiSearch } from "react-icons/fi";

const Search = () => {
  return (
    <div className='flex gap-2'>
        <FiSearch style={{ fontSize: '1.25em' }}/>
        <input type="text" placeholder='Search...'/>
    </div>
  )
}

export default Search