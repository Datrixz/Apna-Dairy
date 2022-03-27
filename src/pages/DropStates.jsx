import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import {StatesN} from './StatesN'

export default function DropStates() {
  const [state, setState] = useState('');

  const handleChange = (event) => {
    setState(event.target.value);
  };
const staten = StatesN.map((e)=>{
    return(
        <MenuItem value={e.id}>{e.statename}</MenuItem>
    )
})
  return (
    <Box sx={{ p:1 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">State</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={state}
          label="State"
          onChange={handleChange}
        >
          {staten}
        </Select>
      </FormControl>
    </Box>
  );
}