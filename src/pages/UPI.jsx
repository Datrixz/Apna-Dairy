import { Button, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';

const UPI = () => {
  return (
    <Paper elevation={1} sx={{px:1,py:6}}>
        <Typography variant="h5" color="initial" >Enter UPI Id:</Typography>
        <TextField id="filled-basic" label="UPI id" variant="filled" fullWidth margin='normal'/>
        <Button component={Link} to='/role' variant="contained" size="large" endIcon={<ArrowForwardIosIcon />} sx={{mt:2}}>
        Submit
      </Button>
    </Paper>
  )
}

export default UPI