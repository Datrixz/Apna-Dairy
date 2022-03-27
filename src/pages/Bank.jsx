import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import BankDet from "./BankDet";
import { useState } from "react";
import UPI from "./UPI";

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function Bank() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", height: "100vh" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab icon={<AccountBalanceIcon />} label="Bank Details" />
          <Tab icon={<AccountBalanceWalletIcon />} label="UPI" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box
          sx={{
            height: "80vh",
            display: "flex",
            alignItems: "center",
          }}
        >
          <BankDet />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Box
          sx={{
            height: "80vh",
            display: "flex",
            alignItems: "center",
          }}
        >
          <UPI />
        </Box>
      </TabPanel>
    </Box>
  );
}
