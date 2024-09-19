import React, { useEffect, useState } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import Experience from '../components/Experience.jsx';
import { useControls } from 'leva';
import { Card, Typography, Box, Grid } from '@mui/material';
import { PerspectiveCamera } from '@react-three/drei';
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa6";
import { TbBrandThreejs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaJava } from "react-icons/fa";
import { SiBlender } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { IoLogoAndroid } from "react-icons/io";
import { SiDbeaver } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { TbBrandRedux } from "react-icons/tb";
import { BsBadge3dFill } from "react-icons/bs";
import { SiWebgl } from "react-icons/si";

// Custom component to dynamically update the camera position
// const CameraController = ({ zNumber, yNumber, xNumber, fovNumber, nearNumber, farNumber }) => {
//   const { camera,set } = useThree(); // Access the camera

//   useEffect(() => {
//     camera.position.set(xNumber, yNumber, zNumber);
//     camera.position.z = zNumber;
//     camera.position.y = yNumber;
//     camera.position.x = xNumber;
//     camera.fov = fovNumber;
//     camera.near = nearNumber;
//     camera.far = farNumber;
//     camera.updateProjectionMatrix(); // Update the projection matrix to apply changes
//     set({ camera })
//   }, [zNumber, yNumber, xNumber, fovNumber, nearNumber, farNumber, camera]); // Add all values to the dependency array

//   return null;
// };

const MainMenu = () => {

  const [view, setView] = useState('MainMenu');

  // Leva controls for x, y, and z positions, FOV, near, and far clipping
  const { name, zNumber, xNumber, yNumber, fovNumber, nearNumber, farNumber } = useControls({
    name: 'world',
    zNumber: 1.8,
    xNumber: -4.7,
    yNumber: 1.57,
    fovNumber: 30.00,
    nearNumber: 0.1,
    farNumber: 2000
  });

  return (
    <Card sx={{ p: 2 }} style={{width:'80%',margin:'0 auto',backgroundColor:'#55679C'}}>
      <Grid container spacing={2} alignItems="center">
        {/* Canvas container */}
        <Grid item xs={12} md={6}>
          <Box sx={{  height: 350 }}>
            <Canvas
            key={'wolfmodel'}
              camera={{
                fov: fovNumber,
                near: nearNumber,
                far: farNumber,
                position: [xNumber, yNumber, zNumber], // Initial camera position
              }}
            >
              {/* Controller to update camera dynamically */}
              <PerspectiveCamera
                zNumber={zNumber}
                xNumber={xNumber}
                yNumber={yNumber}
                fovNumber={fovNumber}
                nearNumber={nearNumber}
                farNumber={farNumber}
              />
              {view === 'MainMenu' ? <Experience /> : <></>}
            </Canvas>
          </Box>
        </Grid>
        
        {/* Typography content */}
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: 'left', p: 2,color:'#1E2A5E' }}>
            <Typography variant="h3">Hi, I'm <span style={{color:'#E1D7B7',fontFamily:'Protest Guerrilla'}}>Amirul Ilman</span> </Typography>
            <Typography style={{fontFamily:'Sofadi One'}} variant="h5">
              I’m a <span style={{color:'#E1D7B7',fontFamily:'Protest Guerrilla'}}>Software Developer </span>with a focus on creating exceptional digital experiences and interactive applications. I leverage modern libraries and frameworks to build innovative, high-performance solutions.
            </Typography>
            <Typography>
            <span style={{color:'#E1D7B7',fontSize:50}}>
                <TbBrandThreejs /> 
                <FaReact /> 
                <FaNode /> 
                <SiMongodb />
                <IoLogoJavascript />
                <FaJava />
                <SiBlender />
                <FaGithub />
                <FaHtml5 />
                <FaCss3Alt />
                <BiLogoPostgresql />
                <IoLogoAndroid />
                <SiDbeaver />
                <VscVscode />
                <TbBrandRedux />
                <BsBadge3dFill />
                <SiWebgl />
            </span>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};

export default MainMenu;
