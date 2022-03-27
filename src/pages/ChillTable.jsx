import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(sno, chill, capacity) {
  return { sno, chill, capacity };
}

const rows = [
  createData(1,'Basna',42000),
  createData(2,'Pakhanjpur', 15000),
  createData(3,'Dhamtari', 10000),
  createData(4,'Bhatagaon', 3000),
];

export default function ChillTable() {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>S.no</TableCell>
            <TableCell>Chilling Centre</TableCell>
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
              <TableCell>{row.chill}</TableCell>
              <TableCell align="right">{row.capacity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
