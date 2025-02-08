import React, { useState } from 'react'
import SideBar from '../components/SideBar'
import Header from './Common/Header';

const UserLayout = (props) => {
  const [curItem, setCurrentItem] = useState('my-profile');

  return (
    <div className='flex flex-col'>
      <Header />
      <div className='flex w-full'>
        <SideBar setCurrentItem={setCurrentItem} />
        <props.page curItem={curItem} />
      </div>
    </div>
  )
}

export default UserLayout