import { Card,Box,Grid2, Typography } from '@mui/material'
import React from 'react'
import Iphone from '../components/Iphone'
import { useControls } from 'leva';
import { Canvas } from '@react-three/fiber';
import {  PerspectiveCamera } from '@react-three/drei';

const ContactMe = () => {
  return (
    <Card style={{width:'80%',margin:'0 auto',backgroundColor:'#55679C',color:'#1E2A5E'}}>
        <Typography sx={{textAlign:'center',color:'#E1D7B7',fontFamily:'Protest Guerrilla'}} variant='h3'>Get In Touch</Typography>
        <Grid2 container spacing={2}>
          <Grid2 size={6}>
            <Box sx={{ width: '80%', height: 450 }}>
            <Canvas className='r3f'>
            <Iphone/>
            </Canvas>
            </Box>
          </Grid2>
          <Grid2 size={6}>
              <Typography style={{fontFamily:'Sofadi One'}} variant='h5'><span style={{color:'#E1D7B7'}}>Email: </span>ilman1amirul@gmail.com</Typography>
              <Typography style={{fontFamily:'Sofadi One'}} variant='h6'><span style={{color:'#E1D7B7'}}>Github: </span>https://github.com/DevByAmirulilman</Typography>
              <Typography style={{fontFamily:'Sofadi One'}} variant='h5'><span style={{color:'#E1D7B7'}}>Phone: </span>019-5756260</Typography>

          </Grid2>
        </Grid2>

    </Card>
  )
}

export default ContactMe
