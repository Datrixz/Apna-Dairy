import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Box, Paper } from "@mui/material";
import { langarr } from "./langarr";
import { Link } from "react-router-dom";

const SelectLang = () => {
  
  let langCard = langarr.map((e, i) => {
    return (
      <Grid component={Link} to='/role' item xs={3} md={2} sx={{
        textDecoration:'none'
      }}>
        <Paper sx={{ textAlign: "center",py:1 }}>
          <img src={e.icon} alt={e.lang} />
          <Typography variant="body2">{e.lang}</Typography>
        </Paper>
      </Grid>
    );
  });

  return (
    <Box sx={{ m: 1, mt: 2 }}>
      <Typography variant="h5" color="initial">
        Choose your language:
      </Typography>
      <Grid container spacing={2} sx={{ mt: 1 }}>
        {langCard}
      </Grid>
    </Box>
  );
};

export default SelectLang;
