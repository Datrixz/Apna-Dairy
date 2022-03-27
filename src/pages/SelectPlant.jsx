import { Box, Typography } from "@mui/material";
import ChillTable from "./ChillTable";
import DropState from "./DropStates";
import PlantTable from "./PlantTable";

const SelectPlant = () => {
  return (
    <Box sx={{ height: "100vh" }}>
      <Typography variant="h5" color="initial" sx={{ mt: 6, ml: 2, mb: 2 }}>
        Choose your State
      </Typography>
      <DropState />
      <Typography variant="h6" color="initial" sx={{ mt: 2, ml: 2, mb: 2 }}>Milk Plants:</Typography>
      <PlantTable/>
      <Typography variant="h6" color="initial" sx={{ mt: 2, ml: 2, mb: 2 }}>Chilling Centres:</Typography>
      <ChillTable/>
    </Box>
  );
};

export default SelectPlant;
