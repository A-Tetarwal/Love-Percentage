'use client'
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const page = ({params}) => {
  const {id} = params;
  const [User, setUser] = useState([])
  const getUsers = async () => {
    const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    console.log(data);
    setUser(data)
  }
  useEffect(() => {
    getUsers()
  }, [])
  

  return (
    <div className='flex flex-col justify-center items-center gap-2'>
      {JSON.stringify(User)}
    </div>
  )
}

export default page