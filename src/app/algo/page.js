import React from 'react'
import Nav from '../components/Nav'
import Algo from '../components/Algo'

function page() {
  return (
    <div className='relative h-dvh overflow-hidden w-full  ' >
        <Nav page="algo" />
        <Algo/>

    </div>
  )
}

export default page