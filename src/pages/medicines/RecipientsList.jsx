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
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useEffect } from 'react';
import axios from 'axios';

const columns = [
  { id: 'name', label: 'Member Name', minWidth: 170 },
  {
    id: 'image',
    label: 'Images',
    minWidth: 170,
    // align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'Number',
    label: 'No of',
    minWidth: 170,
    // align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },

];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData('Panadol', '7 Sep 2023', 45, 'Saad Khan'),
  createData('Augmentin', '15 Dec 2022', 30, 'Ubaid-ur-Rehman'),
  createData('Aspirin', '2 Mar 2024', 50, 'Ashar Usman'),
  createData('Ibuprofen', '10 Oct 2023', 60, 'Muhammad Anas'),
  createData('Sudafed', '5 Jan 2024', 25, 'Abdul Hadi'),
  createData('Tylenol', '20 Jul 2023', 15, 'Hunaid Ahmed'),
  createData('Advil', '30 Nov 2022', 40, 'Basir Ahmed'),
  createData('Motrin', '12 May 2024', 55, 'Syed Hammad'),
  createData('Nyquil', '18 Sep 2023', 20, 'Tajammul Hussain'),
  createData('DayQuil', '9 Feb 2024', 35, 'Abdul Samad'),
];

export default function MedicineList() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [open, setOpen] = React.useState(false);
  const [rejectReason, setRejectReason] = useState('');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [withdrawal, setWithdrawal] = React.useState([]);


  const handleSubmit = () => {
    // Handle the rejection and use the 'rejectReason' state as needed.
    console.log("Reason for rejection: " + rejectReason);
    setOpen(false);
  };


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const [name, setName] = useState("")
  const [images, setImages] = useState("")
  const [distance, setDistance] = useState("")
  const [status, setStatus] = useState(false)
  const [data, setData] = useState();
  const [request, setRequest] = useState("");
  let accepted = 'Accepted'
  let rejected = 'Rejected'

  const withdrawalRequest = async () => {
    try {
      const response = await axios.get('https://mlm-backend-mx3k.onrender.com/redemption/pending-redemption-requests');
      // console.log("API Response Data: ", response.data);

      setWithdrawal(response.data.pendingRequests);
      console.log(response.data.pendingRequests);
      // console.log("Withdrawal State Data: ", withdrawal);

    } catch (error) {
      console.error('An error occurred:', error);
    }
  };


  useEffect(() => {
    withdrawalRequest();
  }, []);

  console.log("Withdrawal State Data: ", withdrawal);

  // const withdrawalStatus = async (MemberID, accepted) => {
  //   let response = await fetch('http://localhost:5000/redemption/update-redemption-request-status', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       requestId: MemberID,
  //       newStatus: accepted
  //     }),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //   response = await response.json()
  //   console.log(response)
  //   };

  const withdrawalStatus = async (RequestID, accepted) => {
    try {
      let response = await fetch('https://mlm-backend-mx3k.onrender.com/redemption/update-redemption-request-status', {
        method: 'POST',
        body: JSON.stringify({
          requestId: RequestID,
          newStatus: accepted,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      let responseData = await response.json();

      if (response.ok) {
        // If the status update was successful, remove the row from the withdrawal state.
        setWithdrawal((prevWithdrawal) => {
          return prevWithdrawal.filter((row) => row.RequestID !== RequestID);
        });
      } else {
        console.error('Error updating status:', responseData.error);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <>

      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <Divider />
        <TableContainer sx={{ maxHeight: 500 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ padding: "20px" }}
              >
                Withdrawal Request:
              </Typography>
              <TableRow>
                <TableCell component="th" scope="row">
                  Member id
                </TableCell>
                <TableCell component="th" scope="row">
                  Points Requested
                </TableCell>
                <TableCell style={{ width: 200 }} align="left">
                  Request type
                </TableCell>
                <TableCell style={{ width: 200 }} align="left">
                  Date
                </TableCell>
                <TableCell style={{ width: 200 }} align="left">
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? Array.isArray(withdrawal) ? withdrawal.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : []
                : Array.isArray(withdrawal) ? withdrawal : []
              ).map((row) => (
                <TableRow key={row.MemberID}>
                  <TableCell component="th" scope="row">
                    {row.MemberID}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.PointsRequested}
                  </TableCell>
                  <TableCell style={{ width: 200 }} align="left">
                    {row.RequestType}
                  </TableCell>
                  {/* <TableCell style={{ width: 200 }} align="left">
                  <TableCell component="th" scope="row">
                    {row.createdAt}
                  </TableCell>
                </TableCell> */}
                  <TableCell style={{ width: 200 }} align="left">
                    {new Date(row.createdAt).toLocaleDateString("en-US")}
                  </TableCell>

                  <TableCell style={{ width: 200 }} align="left">
                    <Stack spacing={2} direction="row">
                      <Button
                        variant="contained"
                        color="success"
                        onClick={() => { withdrawalStatus(row.RequestID, accepted) }}
                        value={accepted}
                      >
                        Accept
                      </Button>
                      <div>
                        <Button variant="contained" color="error" onClick={() => { withdrawalStatus(row.RequestID, rejected) }}>
                          Reject
                        </Button>
                        <Modal
                          open={open}
                          onClose={handleClose}
                          aria-labelledby="modal-modal-title"
                          aria-describedby="modal-modal-description"
                        >
                          <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                              Reason for Rejection:
                            </Typography>
                            <br />
                            <textarea
                              rows={4}
                              placeholder="Please provide a reason for rejection"
                              value={rejectReason}
                              onChange={(e) => setRejectReason(e.target.value)}
                              style={{ width: '100%', marginBottom: '10px' }}
                            />
                            <Button variant="contained" color="primary" onClick={handleSubmit}>
                              Submit
                            </Button>
                          </Box>
                        </Modal>
                      </div>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={Array.isArray(withdrawal) ? withdrawal.length : 0}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

    </>
  );
}