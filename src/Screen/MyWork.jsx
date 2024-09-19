import { Card, Typography, Box, Button, ImageListItem, ImageListItemBar, ImageList } from '@mui/material';
import React, { useState } from 'react';
import { useControls } from 'leva';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import OldMan from '../components/OldMan';
import { allwork, myExp } from '../assets/allwork';

const MyWork = () => {
    const { zNumber, xNumber, yNumber, fovNumber, nearNumber, farNumber } = useControls({
        name: 'world',
        zNumber: 1.8,
        xNumber: -4.7,
        yNumber: 1.57,
        fovNumber: 30.00,
        nearNumber: 0.1,
        farNumber: 2000
    });

    const [showing, setShowing] = useState({ name: 'MyWork', data: allwork });

    const handleClick = (website) => {
        window.open(website, '_blank');
    };

    const renderAllWork = () => {
        if (Array.isArray(showing.data)) {
            return showing.data.map((skill) => (
                <ImageListItem 
                    key={skill.title} 
                    onClick={() => handleClick(skill.website)}
                    sx={{
                        cursor: 'pointer',
                        transition: 'transform 0.2s, box-shadow 0.2s',
                        '&:hover': {
                            transform: 'scale(1.05)',
                            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                        }
                    }}
                >
                    <img
                        srcSet={`${skill.image}?w=1008&fit=crop&auto=format&dpr=2`}
                        src={`${skill.image}?w=100&fit=crop&auto=format`}
                        alt={skill.title}
                        loading="lazy"
                        style={{ borderRadius: '8px' }}
                    />
                    <ImageListItemBar
                        title={skill.title}
                        subtitle={skill.description}
                        sx={{
                            background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3))',
                        }}
                    />
                </ImageListItem>
            ));
        }
        return <Typography>No projects available</Typography>;
    };

    return (
        <Card style={{ width: '80%', margin: '0 auto', padding: '20px', backgroundColor: '#55679C' }}>
            <Typography variant='h4' style={{textAlign:'center',fontFamily:'Protest Guerrilla',color:'#E1D7B7'}}>My Work & Experiences</Typography>
            <Box sx={{ width: '100%', height: 200, margin: '0 auto', p: 2 }}>
                <Canvas
                    camera={{
                        fov: fovNumber,
                        near: nearNumber,
                        far: farNumber,
                        position: [xNumber, yNumber, zNumber],
                    }}
                >
                    <PerspectiveCamera
                        fov={fovNumber}
                        near={nearNumber}
                        far={farNumber}
                    />
                    <OldMan showing={showing} />
                </Canvas>
            </Box>

            <Box sx={{ textAlign: 'center', p: 2 }}>
                <Button onClick={()=>setShowing({name:'MyWork',data:allwork})} 
                    sx={showing.name === 'MyWork' ? 
                    {mr:2,color:'#E1D7B7',fontFamily:'Protest Guerrilla',backgroundColor:'#1E2A5E'}:
                    {mr:2,color:'#E1D7B7',fontFamily:'Protest Guerrilla'}} 
                    variant='outlined'>My work</Button>
                <Button onClick={()=>setShowing({name:'MyExp',data:myExp})} 
                    sx={showing.name === 'MyExp' ? 
                    {color:'#E1D7B7',fontFamily:'Protest Guerrilla',backgroundColor:'#1E2A5E'}:
                    {color:'#E1D7B7',fontFamily:'Protest Guerrilla'}} variant='outlined'>My Experience</Button>
            </Box>

            {showing.name === 'MyWork' ? 
                <ImageList cols={2} gap={16} sx={{ padding: '20px' }}>
                    {renderAllWork()}
                </ImageList>
                :
                <>
                    {
                      showing.data.map(resp=>(
                        <Card sx={{p:1,m:2,color:'white',backgroundColor:'#1E2A5E'}}>
                        <Typography><span style={{color:'#E1D7B7',fontFamily:'Sofadi One'}} >Role: </span>{resp.role}</Typography>
                        <Typography><span style={{color:'#E1D7B7',fontFamily:'Sofadi One'}} >Company :</span>{resp.company}</Typography>
                        <Typography><span style={{color:'#E1D7B7',fontFamily:'Sofadi One'}} >Tech Stack Used :</span>{resp.stack}</Typography>
                        {
                          resp.work.map(res=>(
                            <ul>
                            <li>{res}</li>
                            </ul>
                          ))
                        }
                        </Card>
                      ))
                    }
                </>
            }
        </Card>
    );
}

export default MyWork;
