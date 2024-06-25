// components/RestrictedRoute.jsx
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const RestrictedRoute = ({ allowedRoles }) => {
  const role = useSelector((state) => state?.global?.role)

  if (!allowedRoles.includes(role)) {
    return <Navigate to="/dashboard" replace />
  }

  return <Outlet />
}

export default RestrictedRoute
