import React from 'react'
import { CssBaseline} from '@mui/material'
import { Container, Grid, Typography, Box, Button } from '@mui/material';
import MainImg from '../assets/main.webp'
import MouseImg from '../assets/mouse.webp'
import KeyboardImg from '../assets/keyboard.webp'
import WatchImg from '../assets/watch.webp'
import HeadsetImg from '../assets/headset.webp'
import './header.css'



const heroImages = [
    {
      path: MouseImg, 
      
      style:{
        width: {
            xs:'80px',
            sm:'120px',
            md:'100px',
            lg:'150px'
          },
       
        top:'10%',
        left: '80%',
        
      }
    },
    {
      path: WatchImg, 
      style:{
        width: {
          xs:'200px',
          sm:'300px',
          md:'300px',
          lg:'300px'
        },
        left: {
          xs: '0',
          md:'10%',
          lg: '45%'
        },
        bottom: {
            xs: '25%',
            sm:'30%',
            md:'10%',
            lg:'5%'
          },
        
      },
      
    }, 
    {
      path: KeyboardImg, style:{
        width: {
            xs:'200px',
            sm:'250px',
            md:'300px',
            lg:'360px'
          },
        
        top: {
            xs:'40%',
            sm:'60%',
            lg:'60%'
        },
        bottom:{
            lg:'0'
        },
        right: '0'
      }
    }, 
    {
      path: HeadsetImg, style:{
        width: {
            xs:'150px',
            sm:'200px',
            md:'250px',
            lg:'360px'
          },
          left: {
            xs: '10%',
            md:'30%',
            lg:'40%'
          },
        top:{
            xs:'20%',
            lg:'10%'
        },
        right: '120px'
      }
    }, 
     
    ]

function Header() {
  return (
    <div 
    >
    <Container
       sx={{
        marginTop:{
            xs:'3em'
        },
        // border:'2px solid gold',
        
       }}
      >
        <CssBaseline/>
       
        <Box
        sx={{
            // border:'2px solid black',
          }}
        >
          <Grid 
          container 
          spacing={4}
          direction={'row'}
          sx={{
            marginTop:{
                xs:'3em'
            }
          }}
          >
            <Grid item 
            xs={12}
            sm={12}
            md={6}
            lg={6}
            sx={{
                display:'flex',
                flexDirection:'column',
                justifyContent:'flex-end',
                zIndex:'120'
            }}
            >
              <Typography 
              variant="h6" 
              align="left"
              >
                Your Hero Section Content
              </Typography>
              <Typography 
              variant="h3" 
              align="left"
              >
                Divine - A Technology, Digital Software Company
              </Typography>
              <Button
              variant='contained'
              sx={{
                marginTop:'2em',
                width:'30%'
              }}
              >Check Out</Button>
            </Grid>
            <Grid 
            item 
            xs={12}
            sm={12}
            md={3}
            lg={4}
            sx={{
              marginLeft:'60px', 
              zIndex:'120',
              marginTop:{
                xs:'-6em'
              }
            //   border:'2px solid white',
            }}
            >
              <Box
              component="img"
              sx={{
                width:{
                    xs: '300px',
                    sm:'400px',
                    md:'400px',
                    lg:'500px'
                },
                display:'block',
                margin:'0 auto',
                marginTop:'90px'
              }}  
              className='animateHero'      
              src={MainImg}
              />
              
            </Grid>
          </Grid>
          </Box>
        {
          heroImages.map((img, index)=>(
            (
              <Box
              component="img"
              position='absolute'
              className='animation'
              sx={img.style}
              src={img.path}
              key={index}
              />
            )
          ))
        }
      </Container>
      </div>
  )
}

export default Header