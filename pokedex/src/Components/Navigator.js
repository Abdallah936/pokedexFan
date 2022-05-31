import React from 'react'
import '../style/navigator.css'
import AppBar from '@mui/material/AppBar'
import { Toolbar,Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { style } from '@mui/system'

const Navigator = () => {
  return (
    <AppBar className='appbar nav' position="fixed">
        <Toolbar>
            <Link to='/' className='link'>
                <Typography className='title1'>Pokedex</Typography>
            </Link>
            <Link to='/pokemon/fav' className='link'>
                <Typography className='title2'>Fav</Typography>
            </Link>
            
        </Toolbar>
            
    </AppBar>
  )
}

export default Navigator