import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='bg-pink-500 px-5 py-5 w-full flex justify-center items-center mb-10'>
        <h1 className='font-extrabold text-3xl'>U&I❤️‍🔥</h1>
        <Link href={'/'} className='font-mono font-extrabold text-3xl'>Letters</Link> {/* routing ke liye app me folder banana hai */}
    </div>
  )
}

export default Header