import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const columns = [
  { id: 'name', label: 'Recipient Name', minWidth: 170 },
  { id: 'code', label: 'Date of Receipt\u00a0', minWidth: 100 },
  {
    id: 'population',
    label: 'Received Medicines',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Quantity Received',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData('Hafeez Ahmed', '25 July 2023', 'Panadol', 20),
  createData('Sara Khan', '12 August 2023', 'Ibuprofen', 15),
  createData('Ali Hassan', '5 September 2023', 'Aspirin', 10),
  createData('Ayesha Malik', '10 October 2023', 'Tylenol', 25),
  createData('Mohammad Ahmed', '15 November 2023', 'Augmentin', 30),
  createData('Fatima Shah', '20 December 2023', 'Sudafed', 12),
  createData('Usman Siddique', '25 January 2023', 'Nyquil', 18),
  createData('Mehwish Ahmed', '8 February 2023', 'Motrin', 22),
  createData('Saima Khan', '15 March 2023', 'Advil', 17),
  createData('Tariq Ali', '21 April 2023', 'DayQuil', 14),
];

export default function RecipientsList() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                 <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ padding: "20px" }}
          >
            Recipients List:
          </Typography>
          <Divider />
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </>
  );
}