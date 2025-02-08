import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { notification } from 'antd';
import { AuthContext } from '../../providers/AuthProvider';
import { AxiosContext } from '../../providers/AxiosProvider';
import { API_URL } from '../../configs';
const Login = () => {
  const { auth, setToken } = useContext(AuthContext);
  const { axios } = useContext(AxiosContext)
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target[0].value.trim();
    const password = e.target[1].value;
    if (!email) {
      notification.warning({ message: 'Input your Email!' });
      e.target[0].value = '';
      e.target[0].focus();
      return;
    } if (!password) {
      notification.warning({ message: 'Input your Password!' });
      e.target[1].focus();
      return;
    }

    axios({
      method: 'POST',
      url: API_URL.auth.login,
      data: { email, password }
    })
      .then(result => {
        setToken(result);
      })
      .catch(err => {
        setToken(null);
      })
  }

  useEffect(() => {

    if (auth) {
      if (auth.role === 'user') navigate('/');
      else if (auth.role === 'admin') navigate('/user');
    }
  }, [auth])

  return (
    <div className='container w-full h-screen flex flex-col gap-4 justify-center items-center'>
      <h1 className='text-5xl'>User Login</h1>
      <form onSubmit={handleLogin} className='flex flex-col gap-4 lg:w-1/3 md:w-1/2 sm:w-[70%] mt-8 w-[90%] transition-all'>
        <input type={'text'} className='border p-2 outline-none' placeholder='Email' />
        <input type={'password'} className='border p-2 outline-none' placeholder='Password' />
        <div className='flex flex-col gap-4 justify-between sm:flex-col'>
          <div className='flex gap-2'>
            <input id='remember' type={'checkbox'} />
            <label htmlFor='remember' className='cursor-pointer hover:text-blue-600'>{'Remember Me'}</label>
          </div>
          <div className='flex gap-1 justify-between'>
            <span>{'If you have not your account?'}</span>
            <Link to={'/register'} className='hover:text-blue-700'>Go Register...</Link>
          </div>
        </div>
        <button type='submit' className='bg-blue-600 text-white p-2'>Login</button>
      </form>
    </div>
  )
}

export default Login