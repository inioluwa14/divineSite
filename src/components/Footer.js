import React from 'react'
import FooterBg from '../assets/footer.webp'
import { Link } from 'react-router-dom'
import {Container, Box, Typography, Button} from '@mui/material'

const styles = {
    bg:{
      backgroundImage: `url(${FooterBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      height: '60vh', // Ensures the section covers the entire viewport height
      color: 'black', // Change text color as needed
    //   border:'2px solid green'
    },
    box:{
  
    }
  }
function Footer() {
  return (
    <div style={styles.bg}>
        <Container maxwidth='lg'>
            <Box 
                sx={{
                    display:'flex',
                    flexDirection:'column',
                    alignItems:'center',
                    color:'white'
                    // justifyContent:'center'
                }}
            >
            <Typography variant='h3'>Let's talk about your projects over tea.</Typography>
            <Typography variant='h5'>Ready to Patner with us and get your work don?</Typography>
            <Button
            variant='contained'
            size='medium'
            sx={{
                marginTop:'1.5em',
                padding:'0.75em',
                background:'#DC4D01',
                "&:hover":{
                  background:'orange'
                }
            }}
            
            >
               <Link
               to='./contact'
                style={{
                    textDecoration:'none',
                    color:'white',
                    
                }}
               >
                Let's Connect
                </Link>
               </Button>
            </Box>
        </Container>
    </div>
  )
}

export default Footer