import React from 'react'
import {Container, Typography, Grid} from '@mui/material'
import {Card, CardContent, Button} from '@mui/material';
import { CardActionArea, CardActions, Box } from '@mui/material';
import Data from './Data.json'
import Pic1 from '../assets/new-cta-bg.jpg'



function SectionOne() {
  return (
    <Container maxWidth='lg'
   
        sx={{
            marginTop: '2em',
            // border:'2px solid black'
        }}    
    >
        <Typography
        variant='h4'
        sx={{
            textAlign:'center',
            fontWeight:'bold',
            lineHeight:'1.5em'
        }}
        >
            Getting ready to experience peace. 
            <br/>
            <span
             style={{color:'#4169e1'}}
            >Welcome!</span>
            <br/>
            Here are some of our projects
        </Typography>
        <Grid container spacing={5} style={{marginTop:'20px'}}>
            {
                Data.map((result, index)=>(
                    <Grid item xs={12} sm={6} md={4} key={index}>
                         <Card 
                         sx={{ maxWidth: '345',
                            marginBottom: '30px',
                            position:'relative',
                            // "&:hover":{
                            //     backgroundColor:'rgba(0, 0, 0, 0.5)',
                            //     zIndex:'120',
                            //     display:'block'
                            // } 
                        }} 

                         >
                            
                            <CardActionArea>
                                {/* <CardMedia
                                
                                component="img"
                                
                                src={Pic1}
                                alt="Contains a picture"
                                style={{height: 0, paddingTop: '56%',
                                    borderRadius:'5px'}}
                                /> */}
                                    <Box component='img' 
                                    sx={{
                                        width:'100%',
                                        height:"150px"
                                    }}
                                    src={Pic1}                                    
                                    />

                                    
                                
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {result.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {result.des}
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <Button 
                            sx={{
                                display:'none',
                                top:'50%',
                                left:'33%',
                                position:'absolute',

                                "&:hover":{
                                    display:'block'
                                }
                            }}
                            variant='contained'
                            >
                                View Demo
                            </Button>
                            <CardActions>
                                <Button
                                variant="outlined" size="medium"
                                sx={{
                                    margin:'0 auto',
                                    border:'1px solid orange',
                                    color:'orange'
                                }}
                                >
                                    Demo
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))
            }
        </Grid>
    </Container>
  )
}

export default SectionOne