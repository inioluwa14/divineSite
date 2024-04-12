import React, { useState } from 'react'
// import CssBaseline from '@mui/material/CssBaseline';
import { Link } from 'react-router-dom';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import {
  AppBar,
  Grid,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import DrawerComp from './DrawerComp';

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

]


const navbar = {
  appbar: {
      background: 'transparent',
      color:'black',
      boxShadow: 'none',
      paddingTop:'1.5em'
  },
  appbarTrue:{
    background:'white',
    color:'black'
  },
  logo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',   
  },
  button:{
    boxShadow:'none',
    '&:hover': {
      background:'yellow',
      color:'white'
    }
  }
  
}
function Navbar() {
 
  const [value, setValue] = useState(0);
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  // const [selectedTab, setSeletedTab] = useState(0)

  // const handleChange = (event, newTab) =>{
  //   setSeletedTab(newTab)
  // }
  const [nav, setNav] = useState(false)

  const changeBackground = () => 
  {
    if(window.scrollY >= 60){
      // console.log(true)
      setNav(true)
      
    }
    else {
      setNav(false)
    }
     
  }
  window.addEventListener('scroll', changeBackground);
  return (
    
    <React.Fragment>
    <AppBar 
    // style={navbar.appbar}
    style={nav ? navbar.appbarTrue: navbar.appbar }
    >
      <Toolbar>
        <Grid container
          sx={{
            // border:'2px solid black',
            display:'flex',
            justifyContent:'center'
          }}
        >
          
            <AcUnitIcon sx={{ transform: "scale(1.75)", marginTop:'0.5em' }} />
            
            <Typography variant='h4' sx={{ fontSize: "2rem", marginLeft:'1.5em'}}>
              <Link
              to='/'
              style={{
                color:'inherit',
                textDecoration:'none'
              }}
              >
                Divine
              </Link>
            </Typography>
            
          {isMatch ? (
            <>
              {/* <Typography variant='h4' sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
                Divine
              </Typography> */}
              <DrawerComp/>
            </>
          ) : (
            <>
              <Tabs
                sx={{marginLeft:'50%'}}
                indicatorColor="primary"
                textColor='white'
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                {
                  pagesPath.map((tab, index)=>(
                    <Tab 
                    sx={{
                      fontWeight:'bold',
                      fontSize: '1em'
                    }}
                    key={index} 
                    label={tab.pageLabel} 
                    component={Link} 
                    to={tab.path}
                    />
                  ))
                }
              </Tabs>
              {/* <Button 
              sx={{ marginLeft: "auto" }} 
              variant="contained"
              component={Link}
              to="/login"
              >
                Login
              </Button>
              <Button 
              sx={{ marginLeft: "10px" }} 
              variant="contained"
              component={Link}
              to="/signin"
              >
                SignUp
              </Button> */}
            </>
          )}

        </Grid>
      </Toolbar>
    </AppBar>
  </React.Fragment>
  )
}

export default Navbar