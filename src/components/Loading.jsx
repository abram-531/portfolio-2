import React, { useContext, useEffect, useRef } from 'react'
import { AuthContext } from '../providers/AuthProvider'

const Loading = () => {
  const ref = useRef();
  const { isLoading } = useContext(AuthContext);

  useEffect(() => {
    if (isLoading)
      ref.current.classList.remove('hide');
    else
      ref.current.classList.add('hide');
  }, [isLoading]);
  return (
    <div ref={ref} className='loading flex justify-center items-center w-screen h-screen'>
      <h1 className='text-green-500 text-7xl'>Loading...</h1>
      <p>{'Please wait a second!'}</p>
    </div>
  )
}

export default Loading