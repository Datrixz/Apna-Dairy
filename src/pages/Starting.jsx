import { Box, Slide } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Starting = () => {
  let navigate = useNavigate();
  window.setTimeout(myFunction, 2000);
  function myFunction() {
    navigate('/lang')
  }
  return (
  
    <>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Link to="lang">
          <Slide direction="down" in={true} timeout={2000} mountOnEnter unmountOnExit>
            <img
              src="img/apnalogo.png"
              alt="logo"
              style={{
                width: "100vw",
              }}
            />
          </Slide>
        </Link>
        <Slide direction="up" in={true} timeout={1000} mountOnEnter unmountOnExit>
        
        <img
          src="img/dlogo.jpg"
          alt="govt sign"
          style={{ width: "80vw" }}
        />
          </Slide>

    </Box>
    </>
  );
};

export default Starting;
