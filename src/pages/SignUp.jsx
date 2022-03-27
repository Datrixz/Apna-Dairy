import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Paper elevation={4} sx={{ px:2 ,py:6}}>
        <Typography variant="h4" color="initial">
          SignUp
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
          Fill the details to register yourself
        </Typography>
        <Box sx={{ mt:2,mb:4 }}>
        <img src="img/pngadhar.png" alt="aadhar" height="auto" width="30px" />
          <Typography variant="h6" color="initial" sx={{display:'inline' ,mb:1}} >
            Enter your Aadhar number:
          </Typography>
          <TextField id="filled-basic" label="Aadhar number" variant="filled" fullWidth/>
        </Box>
        <Button component={Link} to='/otp' variant="contained" size="large" endIcon={<PhoneAndroidIcon />}>
          Get OTP
        </Button>
      </Paper>
    </Box>
  );
};

export default SignUp;
