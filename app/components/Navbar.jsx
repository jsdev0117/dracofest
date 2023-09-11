import { Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import Link from 'next/link'
import useAuth from '../hooks/useAuth'


const Navbar = () => {
  const {user, firebaseGoogleSignIn, logout} = useAuth();

  const signIn = async () => {
    try {
      await firebaseGoogleSignIn()
    } catch (error) {
      console.log(error)
    }
  }

  const signOut = async () => {
    try {
      await logout()
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <div className='h-15 w-full border-b-2 p-2'>
      <Grid container spacing={3} justifyContent={'space-between'}>
        <Grid item xs={6} align='left'>
          <Stack direction={'row'} spacing={3}>
            <Typography color='white' variant='caption'><Link href='/'>Home</Link></Typography>
            <Typography color='white' variant='caption'><Link href='/about'>About</Link></Typography>
            <Typography color='white' variant='caption'><Link href='/entradas'>Entradas</Link></Typography>
          </Stack>
        </Grid>
        <Grid item xs={6} align='right'>
            {user ? (
              <Typography className='cursor-pointer' onClick={signOut} sx={{mx: 2}} color='white' variant='caption'>Logout</Typography>
            ):(
              <Typography className='cursor-pointer' onClick={signIn} sx={{mx: 2}} color='white' variant='caption'>Login</Typography>
            )}
            <Typography className='cursor-pointer' onClick={() => {console.log(user)}} sx={{mx: 2}} color='white' variant='caption'>Sign Up</Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default Navbar