import React from 'react'
import {Card, CardContent, CardMedia, Typography} from '@mui/material';
import { CardActionArea } from '@mui/material';
import Pic1 from '../assets/mitech-landing-main-slider-bg.webp'

function CardHero() {
  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        img={`url(${Pic1})`}
        alt="Picture 1"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  )
}

export default CardHero