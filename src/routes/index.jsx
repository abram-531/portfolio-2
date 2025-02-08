import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Loading from '../components/Loading'
import { routeList } from './routes'

const FinalRoute = ({ route }) => {
  return (
    <route.layout page={route.page} />
  )
}

const UserRoutes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {
          routeList.map(route => {
            return (
              <Route key={route.path} path={route.path} element={<FinalRoute route={route} />} />
            )
          })
        }
      </Routes>
    </Suspense>
  )
}

export default UserRoutes