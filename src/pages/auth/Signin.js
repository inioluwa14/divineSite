import React from 'react'
import {Grid, Typography} from '@mui/material'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LoginImg from '../../assets/drawer.webp'
import { TextField, Button, Box, InputAdornment } from '@mui/material';
import { AccountCircle, LockRounded } from '@mui/icons-material';
import { Link } from 'react-router-dom';


function Signin() {
  return (
    <div>
    <Grid container style={{
      minHeight:'100vh'
    }}>
      <Grid item xs={12} sm={6}>
        <Box
        
        >
        <Box
        component='img'
          src={LoginImg}
          style={{
            width:"100%",
            height:"100vh",
            objectFit:"cover",
          }}
          sx={{
            position:'relative',
            // width:'100%',
            // objectFit:'cover',
            // height:{
            //   xs: '50%',
            //   lg:'100vh'
            // }
          }}
          alt='Contains a view'
        />
        <Typography
        variant='h3'
        sx={{
          position:'absolute',
          top:'50vh',
          left:'20vw',
          color:'white'

        }}
        >Signup</Typography>
        </Box>
      </Grid>
      <Grid container item xs={12} sm={6}
      
      sx={{
        alignItems:'center',
        direction:'column',
        justifyContent:'space-between',
        marginTop:'2.5em'
      }}
      >
        <div/>
        <div 
        style={{
          display:'flex',
          flexDirection:'Column',
          
          maxWidth:400,
          minWidth:300,
        }}>
          <Grid conatiner justifyContent='center'>
            <AcUnitIcon fontSize='2000px' sx={{
              fontSize:50,
                color:'#100f47'
              }}/>
              <Typography>Random</Typography>
          </Grid>
          <TextField label="Username" variant='standard' margin='normal'  InputProps={{
            startAdornment:(
              <InputAdornment position="start">
                <AccountCircle sx={{
                color:'#100f47'
              }}/>
                </InputAdornment>
            )
          }}/>
          <TextField label="Password" variant='standard' margin='normal' InputProps={{
            startAdornment:(
              <InputAdornment position='start'>
              <LockRounded sx={{
                color:'#100f47'
              }}/>
              </InputAdornment>
            )
          }}/>
          <div
          style={{
            height: 20,
            margin:'20px 0'
          }}
          >
            <Button
            variant="contained"
            sx={{
              backgroundColor:'#100f47'
            }}
            >
              Sign up
            </Button>
            
          </div>
          <div>
          <Button
            sx={{
              marginTop:'1.5em',
              "&:hover":{
                textDecoration:'underline',
                textDecorationColor:'black'
              }
            }}
          > 
            <Link to='/login'
            style={{
              textDecoration:'none',
              color:'black',
              
            }}
          
            >
              Click here to Login
              </Link>
            </Button>
          </div>
        </div>
        <div/>
      </Grid>
    </Grid>
  </div>
  )
}

export default Signin