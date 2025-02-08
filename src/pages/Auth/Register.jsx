import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { notification } from 'antd';
import { AuthContext } from '../../providers/AuthProvider';
import { AxiosContext } from '../../providers/AxiosProvider';
import { API_URL, SERVER_URL } from '../../configs';

const Register = () => {
  const [avatar, setAvatar] = useState({ file: null, path: `${SERVER_URL}/avatar/default` });
  const avatarRef = useRef();
  const { auth } = useContext(AuthContext);
  const { axios } = useContext(AxiosContext);
  const navigate = useNavigate();

  const handleAvatar = () => {
    if (!avatarRef.current.value) return;
    const avatarImg = avatarRef.current.files[0];

    const fileReader = new FileReader();
    fileReader.onload = e => {
      setAvatar({ file: avatarImg, path: e.target.result });
    }

    fileReader.readAsDataURL(avatarImg);
  }

  const handleRegister = e => {
    e.preventDefault();
    const name = e.target[0].value.trim();
    const email = e.target[1].value.trim();
    const password = e.target[2].value;
    const confirm = e.target[3].value;
    if (!name) {
      notification.warning({ message: 'Input your Name!' });
      e.target[0].value = '';
      e.target[0].focus();
      return;
    } if (!email) {
      notification.warning({ message: 'Input your Email!' });
      e.target[1].value = '';
      e.target[1].focus();
      return;
    } if (!password) {
      notification.warning({ message: 'Input your Password!' });
      e.target[2].focus();
      return;
    } if (!confirm) {
      notification.warning({ message: 'Confirm your Password!' });
      e.target[3].focus();
      return;
    } if (password !== confirm) {
      notification.warning({ message: 'Confirm is incorrect!' });
      e.target[3].focus();
      return;
    }
    const formData = new FormData();
    formData.append('avatar', avatar.file);
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('confirm', confirm);

    axios({
      method: 'POST',
      url: API_URL.auth.register,
      data: formData
    })
      .then(result => {
        navigate('/login');
      })
  }

  useEffect(() => {
    if (auth) navigate('/')
  }, [auth])

  return (
    <div className='container w-full h-screen flex flex-col gap-4 justify-center items-center'>
      <h1 className='text-5xl'>User Register</h1>
      <input ref={avatarRef} type='file' onChange={handleAvatar} hidden />
      <img src={avatar.path} alt="" className='w-[200px] rounded-full cursor-pointer' onClick={() => avatarRef.current.click()} />
      <form onSubmit={handleRegister} className='flex flex-col gap-4 lg:w-1/3 md:w-1/2 sm:w-[70%] mt-8 w-[90%] transition-all'>
        <input type={'text'} className='border p-2 outline-none' placeholder='Name' />
        <input type={'text'} className='border p-2 outline-none' placeholder='Email' />
        <input type={'password'} className='border p-2 outline-none' placeholder='Password' />
        <input type={'password'} className='border p-2 outline-none' placeholder='Confirm' />
        <div className='flex flex-col gap-4 justify-between sm:flex-row'>
          <span>{'If you have your account?'}</span>
          <Link to={'/login'} className='hover:text-blue-700'>Go Login...</Link>
        </div>
        <button type='submit' className='bg-blue-600 text-white p-2'>Register</button>
      </form>
    </div>
  )
}

export default Register