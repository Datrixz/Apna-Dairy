import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(sno, plant, capacity) {
  return { sno, plant, capacity };
}

const rows = [
  createData(1,'Urla',100000),
  createData(2,'Bilaspur', 20000),
  createData(3,'Jagdalpur', 10000),
  createData(4,'Raigarh', 10000),
  createData(5,'Ambikapur', 4000),
];

export default function PlantTable() {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>S.no</TableCell>
            <TableCell>Plant</TableCell>
            <TableCell align="right">Capacity (in ltr.)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.sno}
              </TableCell>
              <TableCell>{row.plant}</TableCell>
              <TableCell align="right">{row.capacity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
