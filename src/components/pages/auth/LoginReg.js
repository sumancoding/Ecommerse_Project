import {Grid, Card, Box, Tabs, Tab} from '@mui/material';
import cover from '../../../cover.png'

//We're creating a custom component to facilitate the interativity of Login and Registration
const TabPanel= (props) => {
    const {children, value, index} = props;
    return (
        <div role='tabapanel' hidden= {value!== index}>
{
    value === index && (
        <Box>{children}</Box>
    )
}
        </div>
    )
}


const LoginReg = () => {
  return (
    <>
    <Grid container sx={{height: '90vh'}}>
<Grid item lg={7} sm={5} sx={{
    backgroundImage: `url(${cover})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
}}>
</Grid>
<Grid item lg={5} sm={7}>
    <Card sx={{width: '100%', height: '100%'}}>
        <Box>
            <Box sx={{borderBottom: 1, borderColor:'divider'}}>
                <Tabs value={value} textColor='primary' indicatorColor='primary' onChange={handleChange}>
                   <Tab label='Login'sx={{ textTransform: 'none', fontWeight: 'bold'}}>
                   </Tab>
                   <Tab label='Registration' sx={{textTransform:'none', fontWeight: 'bold'}}>

                   </Tab>
                   </Tabs>

            </Box>
            <TabPanel value={value} index={0}> UserLogin</TabPanel>  
            <TabPanel value={value} index={1}> Registration</TabPanel>       
{/* This is customed, not sourced from MUI */}
        </Box>

    </Card>
</Grid>


    </Grid>
    </>
  )
}

export default LoginReg

