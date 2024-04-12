import React, {useState} from 'react'
import {Typography, Drawer, List, ListItemButton, ListItemIcon, ListItemText, IconButton} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import Bg from '../assets/drawer.webp'
import { Link } from 'react-router-dom';


const pagesPath = [
    {
      pageLabel: "About", path: "/about"
    },
    {
      pageLabel: "Services", path: "/services"
    },
    {
      pageLabel: "Contact Us", path: "/contact"
    },
    {
        pageLabel: "Login", path: "/login"
    },
    {
    pageLabel: "Signin", path: "/signin"
    },
  
  ]


function DrawerComp() {

    const [openDrawer, setOpenDrawer] = useState(false)
  return (
    <React.Fragment>
        <Drawer 
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        anchor='right'
        sx={ {
            '& .MuiDrawer-paper': {
                '&:before': {
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    content: '""',
                    display: 'block',
                    background: `url(${Bg})`,
                }
            }
        } }
        >
            
            <List
            
            >
            <Typography
                variant='h3'
                color='white'
                sx={{
                    backgroundColor:'white',
                    color:'black',
                    paddingLeft:'1em'
                 }}
            >
                Site
            </Typography>
            {/* <ListItemButton
                
            >
                <ListItemText>Hello</ListItemText>
            </ListItemButton> */}
                {
                    pagesPath.map((page, index)=>(
                        <ListItemButton
                        onClick={()=> setOpenDrawer(false)} key={index}
                        sx={{
                            paddingTop:'1em',
                            paddingBottom:'1em',
                            borderBottom: '2px solid white',
                            width: 300
                        }}
                        >
                        <ListItemIcon>

                            <ListItemText 
                            
                            sx={{
                                width:'240px',
                                
                            }}
                            >
                                <Link 
                                to={page.path}
                                style={{
                                    textDecoration:'none',
                                    width:'240%',
                                    fontSize:'1.5em',
                                    color:'white'
                                }}
                                >
                                {page.pageLabel}</Link>
                            </ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                    ))
                }
               
            </List>
        </Drawer>
        <IconButton 
        sx={{
            color: 'white',
            marginLeft:'auto',
        }}
        onClick={() => setOpenDrawer(!openDrawer)}>
            <MenuIcon/>
        </IconButton>
    </React.Fragment>
  )
}

export default DrawerComp