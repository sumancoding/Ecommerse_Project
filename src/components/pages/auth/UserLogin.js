import {TextField, Button, Box, Alert} from '@mui/material';
import { NavLink } from 'react-router-dom';
import {useState} from 'react';
const UserLogin = () => {

const[error, setError] = useState({
  status: false,
  msg: '',
  type: ''
});

const handleSubmit= (e) => {    //This could also be handled by creating states for text field but not used like this before
    e.preventDefault();
    const data = new FormData(e.currentTarget) // This is default available in Web API
const actualData = {
  email: data.get('email'),
   password: data.get('password')  //data being retrieved by get method, email is used down as a value
}
//console.log(actualData);
if(actualData.email && actualData.password ) {
  console.log(actualData);
  document.getElementById('login-form').reset()   //This allows to sumbit the form and clewars the screen
  setError({status: true, msg:'Login Success', type:'success'})
} else {
  // console.log('All fields are required');
setError({status: true, msg:'All are Required', type: 'error'})

}
}

  return (
    <>
     <Box component='form' noValidate sx={{mt: 1}} id='login-form' onSubmit={handleSubmit}>
<TextField required margin='normal' fullWidth id='email' name='email' label='Email Address:' / >     
<TextField required margin='normal' fullWidth id='password' name='password' label='Enter your Password:' type='password' / >   
<Box textAlign= 'center'>
    <Button type='submit' variant='contained' sx={{mt:3, mb: 2, px: 5}}> LogIn </Button>
</Box>
<NavLink to='/' > Forgot Password? </NavLink>
{error.status ? <Alert severity={error.type}> {error.msg} </Alert> : ''}
</Box>
    </>
  )
}

export default UserLogin
