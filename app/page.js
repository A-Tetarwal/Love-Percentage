'use client'
import React, { useState } from 'react'

// two way binding
const page = () => {
  const [Username, setUsername] = useState(''); // ye jo quotes me hai vo Username ki value hai, usko setUsername ki help se change kr skte hain
  return (
    <div className='flex justify-center items-center'>
      <form>
        <input 
          type="text" 
          placeholder='Enter user name' 
          value={Username}
          onChange={(e) => { // e matlab yaha pe jo bhi change hua
            setUsername(e.target.value)
          }}
          className='px-3 py-2 outline-none focus:ring-2 ring-pink-500 bg-zinc-800 rounded-md'/>
      </form>
    </div>
  )
}

export default page