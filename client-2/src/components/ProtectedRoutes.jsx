import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProtectedRoute = () => {
  const role = useSelector((state) => state?.global?.role)

  if (role === null) {
    return <Navigate to="/login" replace />
  }

  return <Outlet />
}

export default ProtectedRoute
