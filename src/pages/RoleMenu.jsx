import { Button, Grid, Paper, Typography } from "@mui/material";
import { GiMilkCarton } from "react-icons/gi";
import { MdLocalShipping } from "react-icons/md";
import FactoryIcon from '@mui/icons-material/Factory';
import { Link } from "react-router-dom";

const RoleMenu = () => {
    const btnstyle= { width: "100%", height: "20%" };
    const typoStyle = {fontDecoration: "bold"}
  return (
    <Grid container
    direction='column'
    justifyContent='center'
    alignItems='center'
    sx={{
      height:'100vh'
    }}
    >
      
      <Paper elevation={4}
        sx={{
          height: "60%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          p:4
        }}
      ><Typography variant="h4" color="initial" sx={{mb:2}}>
      Select your role:
    </Typography>
        <Button component={Link} to='/option' variant="contained" sx={btnstyle} size="large" startIcon={<GiMilkCarton/>}>
          <Typography variant="h5" sx={typoStyle}>FARMER</Typography>
        </Button>
        <Button variant="contained" sx={btnstyle} size="large" startIcon={<MdLocalShipping/>}>
        <Typography variant="h5" sx={typoStyle}>TRANSPORTER</Typography>

        </Button>
        <Button component={Link} to='/center' variant="contained" sx={btnstyle} size="large" startIcon={<FactoryIcon fontSize='large'/>}>
        <Typography variant="h5" sx={typoStyle}>PLANT/CENTRE</Typography>

        </Button>
      </Paper>
    </Grid>
  );
};

export default RoleMenu;
