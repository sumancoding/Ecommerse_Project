import {AppBar, Box, Toolbar, Typography, Button} from '@mui/material';
import { NavLink } from 'react-router-dom'; 



function NavBar() {
  return (
    <div>
    <Box sx={{flexGrow: 1}}>
        <AppBar  position='static' color='primary'>
          <Toolbar>
            <Typography variant='h5' component='div' sx={{flexGrow:1}}>
          Suman's Ecommerce
            </Typography>
            <Button component={NavLink} to='/' style={({isActive}) => {return{backgroundColor: isActive ? 'blue' : ''}}} sx={{color: 'white'}}> Home </Button> {/* NavLink is inbuilt */}
            <Button component={NavLink} to='/contact' style={({isActive}) => {return{backgroundColor: isActive ? 'blue' : ''}}} sx={{color: 'white'}}> Contact </Button>
          </Toolbar>
        </AppBar>

      </Box>
     
    </div>
  )
}

export default NavBar
