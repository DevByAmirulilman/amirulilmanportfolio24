import React, { useEffect, useState } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { useControls } from 'leva';
import { Card, Typography, Box, Grid, ListItemIcon, ListItemText, ListItem, List, ListSubheader, Button } from '@mui/material';
import BookCase from '../components/BookCase.jsx';
import { educations,backend,frontend } from '../assets/skills.js';

const CameraController = ({ zNumber, yNumber, xNumber, fovNumber, nearNumber, farNumber }) => {
  const { camera, set } = useThree(); // Access the camera

  useEffect(() => {
    camera.position.set(xNumber, yNumber, zNumber);
    camera.fov = fovNumber;
    camera.near = nearNumber;
    camera.far = farNumber;
    camera.updateProjectionMatrix(); // Update the projection matrix to apply changes
    set({ camera });
  }, [zNumber, yNumber, xNumber, fovNumber, nearNumber, farNumber, camera]);

  return null;
};

const About = () => {
  // Ensure that the initial state of showing.show is an array (languages)
  const [showing, setShowing] = useState({ title: 'Frontend', show: frontend });
  const [view, setView] = useState('BookCase');
  const { zNumber, xNumber, yNumber, fovNumber, nearNumber, farNumber } = useControls({
    name: 'world',
    zNumber: 1.8,
    xNumber: -4.7,
    yNumber: 1.57,
    fovNumber: 30.0,
    nearNumber: 0.1,
    farNumber: 2000,
  });
  console.log(showing)

  // Check that showing.show is an array before mapping
  const renderSkills = () => {
    if (Array.isArray(showing.show)) {
      return showing.show.map((skill) => (
        <ListItem key={skill.name} style={{color:'#E1D7B7',}} >
          <ListItemText primary={skill.name} />
          {skill.details && <ListItemText style={{color:'#E1D7B7'}} secondary={skill.details} />}
          {skill.icon && (
            <ListItemIcon style={{color:'#E1D7B7'}} >
              {React.createElement(skill.icon)}
            </ListItemIcon>
          )}
        </ListItem>
      ));
    }
    return <Typography>No skills available</Typography>;
  };

  return (
    <Card sx={{ p: 2, margin: '0 auto', width: '80%',backgroundColor:'#55679C' }}>
      <Grid container spacing={2} alignItems="flex-start">
        {/* About Me Section */}
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: 'center', p: 2,color:'#1E2A5E' }}>
            <Typography variant="h3" style={{color:'#E1D7B7',fontFamily:'Protest Guerrilla'}}>About Me</Typography>
            <Typography variant="h6" align="left" style={{fontFamily:'Sofadi One'}}>
              I’m a passionate <span style={{color:'#E1D7B7',fontFamily:'Protest Guerrilla'}}>software developer</span> who takes joy in building and designing innovative solutions. In my personal
              time, I enjoy developing web applications using <span style={{color:'#E1D7B7',fontFamily:'Protest Guerrilla'}}>Javascript</span> mainly using <span style={{color:'#E1D7B7',fontFamily:'Protest Guerrilla'}}>React.js</span> for Front End and <span style={{color:'#E1D7B7',fontFamily:'Protest Guerrilla'}}>Node Js/Express Js</span> for Back End and creating immersive 3D websites with <span style={{color:'#E1D7B7',fontFamily:'Protest Guerrilla'}}>THREE.js</span> . As a
              full-stack developer, I work across a range of technologies, from front-end frameworks to back-end systems.
            </Typography>
          </Box>

          {/* Buttons to toggle content */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <Button style={ showing.title === 'Frontend' ? {color:'black',fontFamily:'Protest Guerrilla'}:{color:'#E1D7B7',fontFamily:'Sofadi One'}} onClick={() => setShowing({ title: 'Frontend', show: frontend })}>Frontend</Button>
            <Button style={ showing.title === 'Backend' ? {color:'black',fontFamily:'Protest Guerrilla'}:{color:'#E1D7B7',fontFamily:'Sofadi One'}} onClick={() => setShowing({ title: 'Backend', show: backend })}>Backend</Button>
            <Button style={ showing.title === 'Education' ? {color:'black',fontFamily:'Protest Guerrilla'}:{color:'#E1D7B7',fontFamily:'Sofadi One'}} onClick={() => setShowing({ title: 'Education', show: educations })}>Education</Button>
          </Box>

          {/* Skills Section */}
          <Box sx={{ width: '100%', m: '0 auto', p: 2 }}>
            <List dense={false}>
              <ListSubheader style={{backgroundColor:'#1E2A5E',color:'#E1D7B7',fontFamily:'Protest Guerrilla'}}>{showing.title}</ListSubheader>
              {renderSkills()}
            </List>
          </Box>
        </Grid>

        {/* 3D Canvas Section */}
        <Grid item xs={12} md={6}>
          <Box sx={{ width: '100%', height: 400,mt:10 }}>
            <Canvas
              camera={{
                fov: fovNumber,
                near: nearNumber,
                far: farNumber,
                position: [xNumber, yNumber, zNumber], // Initial camera position
              }}
            >
              <CameraController zNumber={zNumber} xNumber={xNumber} yNumber={yNumber} fovNumber={fovNumber} nearNumber={nearNumber} farNumber={farNumber} />
              {view === 'BookCase' && <BookCase />}
            </Canvas>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};

export default About;
