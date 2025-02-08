import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { SERVER_URL } from '../../configs';
import { AuthContext } from '../../providers/AuthProvider';
import { Dropdown, Space } from 'antd';
import { DownOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons';

const Header = () => {
  const { auth, setToken } = useContext(AuthContext);
  const navigate = useNavigate();
  const items = [
    {
      icon: <UserOutlined />,
      label: <Link to="/user">My Page</Link>,
      key: '0',
    },
    {
      type: 'divider',
    },
    {
      icon: <LogoutOutlined />,
      label: 'Logout',
      key: '3',
      onClick: () => { setToken(null); navigate('/login') }
    },
  ];

  return (
    <header className='flex justify-between items-center px-10 py-2'>
      <Link to={'/'} className='logo'>
        {/* <img src={`${SERVER_URL}/images/background/logo.gif`} alt="" className='w-24 h-18 rounded-full transition-all hover:scale-110 transition-all' /> */}
      </Link>
      <nav className='flex gap-4'>
        <Link to={'/'}>Blog</Link>
        <Link to={'/chat'}>Chat</Link>
        <Link to={'/game/oryon'}>Oryon</Link>
        <Link to={'/shop'}>E-Shop</Link>
        <Link to={'/gallery'}>Gallery</Link>
      </nav>
      {auth ?
        <div className='flex gap-2'>
          <Dropdown menu={{ items }} trigger={['click']}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <img src={`${SERVER_URL}/avatar/${auth.avatar}`} className='w-10 h-10 rounded-full' />
                <div>{auth.name.toUpperCase()}</div>
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>

        </div>
        : <div className='flex gap-3'>
          <Link to={'/login'}>Login</Link>
          <Link to={'/register'}>Register</Link>
        </div>
      }
    </header>
  )
}

export default Header