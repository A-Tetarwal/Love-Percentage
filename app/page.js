'use client'
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

// two way binding
const page = () => {
  const [Username, setUsername] = useState(''); // ye jo quotes me hai vo Username ki value hai, usko setUsername ki help se change kr skte hain

  const [User, setUser] = useState([]) // user array aa rha hai api se
  const getUsers = async () => {
    // const user = await axios.get('https://jsonplaceholder.typicode.com/users');
    // const data = user.data
    // console.log(data);

    // or
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log(data);
    // user name set krenge
    setUser(data)
  }
  // getUsers()
  useEffect(() => {
    getUsers()
  }, [])
  return (
    <div className='flex flex-col justify-center items-center gap-2'>
      <div className="click flex justify-center items-center gap-2">
        <form>
          <input 
            type="text" 
            placeholder='Enter user name' 
            value={Username}
            onChange={(e) => { // e matlab yaha pe jo bhi change hua
              setUsername(e.target.value)
            }}
            className='text-sm px-3 py-2 outline-none focus:ring-2 ring-pink-600 bg-zinc-800 rounded-md'/>
        </form>
        <button 
          onClick={getUsers}
          className='bg-pink-500 px-3 py-2 text-sm font-semibold rounded-md hover:bg-pink-600'>
            Get Users
        </button>
      </div>
      <div className="flex justify-center items-center w-full bg-zinc-800 rounded-md py-2">
        <ul>
          {User.map((e) => {
            return <li className='text-sm flex justify-between gap-3'>
              {e.name} <Link href={`/${e.id}`} className='text-blue-500 hover hover:text-blue-300'>Explore</Link>
            </li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default page