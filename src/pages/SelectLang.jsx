import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Box, Paper, Slide } from "@mui/material";
import { langarr } from "./langarr";
import { Link } from "react-router-dom";
import Wave from "react-wavify";

const SelectLang = () => {
  let langCard = langarr.map((e, i) => {
    return (
      <Grid
        component={Link}
        to="/role"
        item
        xs={3}
        md={2}
        sx={{
          textDecoration: "none",
        }}
      >
        <Slide
          direction="right"
          in={true}
          timeout={1000}
          mountOnEnter
          unmountOnExit
        >
          <Paper sx={{ textAlign: "center", py: 1 }}>
            <img src={e.icon} alt={e.lang} />
            <Typography variant="body2">{e.lang}</Typography>
          </Paper>
        </Slide>
      </Grid>
    );
  });

  return (
    <>
    <Wave
        fill="#1976D2"
        paused={false}
        options={{
          height: 20,
          amplitude: 15,
          speed: 0.25,
          points: 3,
        }}
        style={{
          position: 'absolute',
          transform: 'rotate(180deg)',
          top: '-8px'
        }}
      />
      <Box
        sx={{
          position: 'relative',
          height: "100vh",
          p: 1,pt:5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src="/img/lang.svg"
          alt="lang"
          style={{ width: "90vw", height: "auto" }}
        />
        <Box>
          <Typography variant="h5" color="initial" sx={{mt:2}}>
            Choose your language:
          </Typography>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            {langCard}
          </Grid>
        </Box>
      </Box>
      
    </>
  );
};

export default SelectLang;
