import React from 'react'
import SubHeader from '../assets/subheader.webp'
import {Typography} from '@mui/material'

const styles = {
  bg:{
    backgroundImage: `url(${SubHeader})`,
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
function SubHeaders(props) {
  const name = props.name
  return (
    <div style={styles.bg}>
      
      <Typography
      variant='h2'
      >{name}</Typography>
    </div>
  )
}

export default SubHeaders