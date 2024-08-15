'use client'
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// two way binding, and axios and other practice on react
const page1 = () => {
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


function calculateLovePercentage(name1, name2) {
  let combined = (name1 + name2).toLowerCase();
  let counts = [];
  let counted = new Array(26).fill(false); // Assuming only lowercase English letters

  // Step 1: Count occurrences for each unique character in the combined string
  for (let i = 0; i < combined.length; i++) {
      let currentChar = combined.charAt(i);
      if (!counted[currentChar.charCodeAt(0) - 'a'.charCodeAt(0)]) {
          let count = 0;
          for (let j = 0; j < combined.length; j++) {
              if (combined.charAt(j) === currentChar) {
                  count++;
              }
          }
          counts.push(count);
          counted[currentChar.charCodeAt(0) - 'a'.charCodeAt(0)] = true;
      }
  }

  // Step 2: Calculate the love percentage by summing pairs
  let num = counts.join('');
  while (num.length > 2) {
      let newNum = '';
      for (let i = 0, j = num.length - 1; i <= j; i++, j--) {
          if (i === j) {
              newNum += num.charAt(i); // Append middle character if any
          } else {
              let sum = parseInt(num.charAt(i)) + parseInt(num.charAt(j));
              newNum += sum;
          }
      }
      num = newNum;
  }

  return parseInt(num);
}


const page = () => {
  const notify = () => {
    toast.info(`🦄 ${name1} ❤️‍🔥 ${name2}: ${calculateLovePercentage(name1, name2)} %` , {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      // transition: Bounce,
      });
  }

  const [name1, setname1] = useState('');
  const [name2, setname2] = useState('');


  return (
    <div className='flex flex-col gap-2'>
      <form className='flex flex-col gap-3 p-5 bg-zinc-900 rounded-md'>
        <h1 className='text-center font-bold text-xl mb-2'>Love Percentage</h1>
      <input 
            type="text" 
            placeholder='Enter Name1' 
            value={name1}
            onChange={(e) => { // e matlab yaha pe jo bhi change hua
              setname1(e.target.value)
            }}
            required
            className='text-sm px-3 py-2 outline-none focus:ring-2 ring-pink-600 bg-zinc-800 rounded-md'/>
      <input 
            type="text" 
            placeholder='Enter Name2' 
            value={name2}
            onChange={(e) => { // e matlab yaha pe jo bhi change hua
              setname2(e.target.value)
            }}
            required
            className='text-sm px-3 py-2 outline-none focus:ring-2 ring-pink-600 bg-zinc-800 rounded-md'/>
      </form>
      <button 
        onClick={notify}
        className='bg-pink-500 px-3 py-2 rounded-md text-white font-semibold'>
          Love Percent
      </button>
      <Link href={'/HowItWorks'} className='text-blue-500 hover:to-blue-600 text-sm'>How it works?</Link>
      <ToastContainer/>
    </div>
  )
}

export default page