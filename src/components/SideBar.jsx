import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Menu, Button } from 'antd';

import {
  CommentOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  UserSwitchOutlined,
} from '@ant-design/icons';
import { AuthContext } from '../providers/AuthProvider';

const SideBar = ({ setCurrentItem }) => {
  const { auth } = useContext(AuthContext);

  const items = [
    { key: 'user_profile', icon: <UserOutlined />, label: <span className='pr-20'>My Profile</span>, onClick: () => selectItem('my-profile') },
    {
      key: 'sub_user_email',
      label: 'Email',
      icon: <MailOutlined />,
      children: [
        { key: 'user_email_total', label: 'Total', onClick: () => selectItem('email_total') },
        { key: 'user_email_receive', label: 'Received', onClick: () => selectItem('email_received') },
        { key: 'user_email_send', label: 'Send', onClick: () => selectItem('email_send') },
        { key: 'user_email_draft', label: 'Draft', onClick: () => selectItem('email_draft') },
      ],
    },
    {
      key: 'sub_user_chat',
      label: 'Chat',
      icon: <CommentOutlined />,
      children: [
        { key: 'user_chat_contact', icon: <UserSwitchOutlined />, label: 'Contact', onClick: () => selectItem('chat_contact') },
        { key: 'user_chat_recent', label: 'Recent', onClick: () => selectItem('chat_recent') },
        {
          key: 'sub_user_chat_room',
          label: 'Rooms',
          children: [
            { key: 'user_chat_room_common', label: 'Common Room' },
            { key: 'user_chat_room_developer', label: 'Developer Room' },
          ],
        },
      ],
    },
  ];

  if (auth && auth.role === 'admin') {
    items.push({
      key: 'sub_admin',
      label: 'Admin',
      icon: <MailOutlined />,
      children: [
        { key: 'admin_users', icon: <DesktopOutlined />, label: 'Users', onClick: () => selectItem('admin-users') },
        { key: 'admin_products', icon: <DesktopOutlined />, label: 'Products', onClick: () => selectItem('admin-products') },
      ],
    })
  }

  const selectItem = id => {
    setCurrentItem(id);
  }


  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className='max-w-[256px]'>
      <Button type="primary" onClick={toggleCollapsed} className='z-50 mb-4 bg-blue-500'>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={['1']}
        // defaultOpenKeys={['sub1']}
        mode="inline"
        theme="light"
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  )
}

export default SideBar