import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

function Auth() {

    function handleSubmit(e){
        e.preventDefault();
        

    }
  return (
    <div className='justify-center items-center w-full h-dvh flex flex-col   ' >
        <div className=' pb-5 ' >
            <Image src='/logo.jpg' width={150} height={150} alt='logo' />
        </div>
        <div className='flex  flex-col gap-6 px-3 sm:px-0 w-full sm:w-[60%] h-52 ' >
            <input type='text' placeholder='Username' className=' outline-none border-b-[1.2px] py-2 border-black  w-full ' />
            <input type='password' placeholder='Password' className=' outline-none border-b-[1.2px] py-2 border-black  w-full ' />
            <Link href="/algo" className='flex items-center justify-center bg-black text-white mt-4 pt-3 p-2 rounded-md ' >Login</Link>
        </div>
    </div>
  )
}

export default Auth