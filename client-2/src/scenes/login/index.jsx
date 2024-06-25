import React from 'react'
import { Button, Box, Divider, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setUserRole } from '../../state'

const Login = () => {
  const dispatch = useDispatch()
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      width="100vw"
    >
      <Box textAlign="center" mb={5}>
        <Typography variant="h3" gutterBottom>
          Welcome to Admin Panel
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Please log in to continue
        </Typography>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        width="340px"
        p={3}
        bgcolor="#0000ff17"
        boxShadow={3}
        borderRadius="16px"
      >
        <Button
          component={Link}
          to="/dashboard/"
          sx={{
            width: '100%',
            textAlign: 'center',
            fontSize: '1rem',
            fontWeight: 'bold',
            py: 2,
            borderRadius: '29px',
            background: '#3e3eff',
            color: 'white',
            '&:hover': {
              background: '#3e5eff',
            },
          }}
          onClick={() => dispatch(setUserRole('user'))}
        >
          Login as a User
        </Button>

        <Box display="flex" alignItems="center" width="100%" my={2}>
          <Divider sx={{ flex: 1, bgcolor: 'grey.300' }} />
          <Typography variant="body2" sx={{ mx: 2 }}>
            OR
          </Typography>
          <Divider sx={{ flex: 1, bgcolor: 'grey.300' }} />
        </Box>

        <Button
          component={Link}
          to="/dashboard/"
          sx={{
            width: '100%',
            textAlign: 'center',
            fontSize: '1rem',
            fontWeight: 'bold',
            py: 2,
            borderRadius: '29px',
            background: '#3e3eff',
            color: 'white',
            '&:hover': {
              background: '#3e5eff',
            },
          }}
          onClick={() => dispatch(setUserRole('admin'))}
        >
          Login as an Admin
        </Button>
      </Box>
    </Box>
  )
}

export default Login
