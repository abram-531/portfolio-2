import React from 'react'
import { Link } from 'react-router-dom'
import { SERVER_URL } from '../../configs'

const Error404 = () => {
  return (
    <div className=' h-screen relative flex flex-col justify-center items-center'>
      <img src={`${SERVER_URL}/images/7.jpg`} alt='' className='w-full h-full absolute -z-20 top-0' />
      <img src={`${SERVER_URL}/images/404-error-img.png`} alt='' className='w-[60%] z-10' />
    </div>
  )
}

export default Error404