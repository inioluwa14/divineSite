import React from 'react'
import {Typography, Grid, Box, Button} from '@mui/material'
import { Link } from 'react-router-dom';
import Desc1 from '../assets/preview1.webp'

const data = [
      
    {
        "id":1,
        "title": "About Company",
        "des": "In general, analyses of famous case studies help your clients, partners, and visitors have a better understanding of what is going on in the market. Your helpful advice can also be beneficial for audiences, which keeps them coming back for more.",
        "img":  `${Desc1}`,
        "to": './about',
        
    },
]
function SectionTwo() {
  return (
    
    <>
     {
        data.map((result, index)=>(
            <Grid container spacing='10%'
            sx={{
                padding:'2em',
                
            }}
            >
            <Grid item xs={12} sm={12} md={12} lg={6} key={index}>
                <Box
                sx={{
                    width:{
                        xs: '80%',
                        sm:'100%',
                        md:'100%',
                        lg:'700px'
                    },
                    
                    marginTop:{
                        // xs: '20vh'
                    },
                    display:'block',
                    margin:{
                        xs:'0 auto'
                    },
                   

                }}
                component='img'
                src={result.img}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6}
                sx={{
                   marginTop:{
                    lg:'10vh'
                   }
                }}
            >
                <Box
                sx={{
                    
                    width:{
                        md:'80%'
                    },
                    display:'block',
                    margin:{
                        xs:'0 auto'
                    },
                }}
                >
                <Typography
                variant='h4'
                sx={{
                    fontWeight:'bold'
                }}
                >{result.title}
                </Typography>
                <div 
                style={{
                    marginTop:'1.5em',
                    width:'100%',
                    fontSize:'1.05em'
                }}
                >
                    {result.des}
                </div>
                <Button 
                variant='contained'
                size='medium'
                sx={{
                    marginTop:'1em',
                    padding:'1em 1em',
                    textTransform:'capitalize'
                }}
                
                >
                    <Link to={result.to}
                    style={{
                        color:'white',
                        textDecoration:'none'
                    }}
                    > Find out more</Link>
                </Button>
                </Box>
            </Grid>
        </Grid>
        ))
     }
    </>
   
  )
}

export default SectionTwo