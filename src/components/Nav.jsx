import { Box,Button } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <Box style={{width:'80%',margin:'0 auto',marginTop:20}}>
      <Button style={{color:'#E1D7B7'}} component={NavLink} to='/'>Home</Button>
      <Button style={{color:'#E1D7B7'}} component={NavLink} to='/About'>About</Button>
      <Button style={{color:'#E1D7B7'}} component={NavLink} to='/Mywork'>My work</Button>
      <Button style={{color:'#E1D7B7'}} component={NavLink} to='/ContactMe'>Contact Me</Button>
    </Box>
  )
}

export default Nav
