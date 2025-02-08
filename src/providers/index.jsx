import React from 'react'
import AuthProvider from './AuthProvider'
import AxiosProvider from './AxiosProvider'

const Provider = ({ children }) => {
  return (
    <AuthProvider>
      <AxiosProvider>
        {children}
      </AxiosProvider>
    </AuthProvider>
  )
}

export default Provider