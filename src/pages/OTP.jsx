import { Button, Card, TextField, Typography } from '@mui/material'
import React from 'react'
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import { Box } from '@mui/system';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';

const OTP = () => {
  return (
    <Box
    sx={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    }}
  >
    <Card elevation={4} sx={{ px:2 ,py:6}}>
      <Typography variant="h4" color="initial">
        SignUp
      </Typography>
      <Box sx={{ mt:2,mb:2 }}>
      <PhoneAndroidIcon fontSize='small' sx={{mr:1}}/>
        <Typography variant="h5" color="initial" sx={{display:'inline' ,mb:1}} >
          Enter OTP:
        </Typography>
        <TextField id="filled-basic" label="OTP" variant="filled" fullWidth/>
        <Button variant="text">
        Resend OTP
      </Button>
      </Box>
      <Button component={Link} to='/bank' variant="contained" size="large" endIcon={<ArrowForwardIosIcon />}>
        Submit
      </Button>
    </Card>
  </Box>
  )
}

export default OTP