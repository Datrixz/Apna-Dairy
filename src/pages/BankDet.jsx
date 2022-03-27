import { Button, Paper, TextField, Typography } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';

const BankDet = () => {
  return (
    <Paper elevation={1} sx={{px:1,py:4}}>
        <Typography variant="h5" color="initial" >Enter Bank Details:</Typography>
        <TextField id="filled-basic" label="Account Number" variant="filled" fullWidth margin='normal'/>
        <TextField id="filled-basic" label="IFSC Code" variant="filled" margin='normal' fullWidth/>
        <TextField id="filled-basic" label="Account Holder Name" variant="filled" margin='normal' fullWidth/>
        <Button component={Link} to='/role' variant="contained" size="large" endIcon={<ArrowForwardIosIcon />} sx={{mt:2}}>
        Submit
      </Button>
    </Paper>
  )
}

export default BankDet