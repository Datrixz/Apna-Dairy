import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const Starting = () => {
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
          <Box
            component="img"
            src="img/apnalogo.png"
            alt="logo"
            sx={{
              width: "100vw",
            }}
          />
        </Link>
        <Box
          component="img"
          src="img/dlogo.jpg"
          alt="govt sign"
          sx={{ width: "80vw" }}
        />
      </Box>
    </>
  );
};

export default Starting;
