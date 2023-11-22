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
  const [rows, setRows] = React.useState([]);


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
  // const [response, setResponse] = useState([])
  const [data, setData] = useState();
  // let result;
  const [withdrawal, setWithdrawal] = React.useState([]);

  const handleActivity = async () => {
    try {
      const response = await axios.get('http://localhost:3000/odometer/getpending')
      console.log("Response", response);
      // setWithdrawal(response.data);
      setRows(response.data);
      console.log("response", rows);

    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  // console.log("response array", data);


  useEffect(() => {
    handleActivity();

  }, []);

  const approvalStatus = async (MemberID, PictureID, ApprovalStatus) => {
    try {
      const response = await fetch('http://localhost:3000/odometer/updateApprovalStatus', {
        method: 'PUT',
        body: JSON.stringify({ MemberID, PictureID, ApprovalStatus }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(response);
      let responseData = await response.json();

      if (response.ok === true) {
        // If the status update was successful, remove the row from the withdrawal state.
        setRows((prevWithdrawal) => {
          return prevWithdrawal.filter((row) => row.PictureID !== PictureID);
        });
      } else {
        console.error('Error updating status:', responseData.error);
      }

    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const handleButtonClick = (MemberID, PictureID) => {
    // Perform the API call
    // handleOpen();
    approvalStatus(MemberID, PictureID, 'Rejected');

    // Call the existing click handler
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
                Activity Request
              </Typography>
              <TableRow>
                <TableCell component="th" scope="row">
                  Member id
                </TableCell>
                {/* <TableCell component="th" scope="row">
                  Member Name
                </TableCell> */}
                <TableCell style={{ width: 320 }} align="left">
                  Images
                </TableCell>
                <TableCell style={{ width: 160 }} align="left">
                  Distance
                </TableCell>
                <TableCell style={{ width: 160 }} align="left">
                  Approval Status
                </TableCell>
              </TableRow>
            </TableHead>
            {/*<TableBody>
              {data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <TableRow >
                    <TableCell component="th" scope="row">
                      gdfg
                    </TableCell>
                    <TableCell style={{ width: 160 }} align="left">
                      fdgd
                    </TableCell>
                    <TableCell style={{ width: 160 }} align="left">
                      gngvngf
                    </TableCell>
                    <TableCell style={{ width: 160 }} align="left">
                      <Stack spacing={2} direction="row">
                        <Button variant="contained" color="success">
                          Accept
                        </Button>
                        <div>
                          <Button variant="contained" color="error" onClick={handleOpen}>
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
            </TableBody> */}

            <TableBody>
              {(rowsPerPage > 0
                ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : rows
              ).map((row) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.MemberID}
                    {/* <div>
                      {data.map((item) => (
                        <p key={item.id}>
                           {item.MemberName}
                        </p>
                      ))}
                    </div> */}
                  </TableCell>
                  {/* <TableCell component="th" scope="row">
                    {row.MemberName}
                  </TableCell> */}
                  <TableCell style={{ width: 160 }} align="left">
                    <img style={{ width: '100px', height: '50px', margin: '0px 5px' }} src={row.DataURI} alt="" />
                    {row.lastAcceptedImage ? (
                      <img style={{ width: '100px', height: '50px' }} src={row.lastAcceptedImage} alt="" />
                    ) : null}
                  </TableCell>


                  <TableCell style={{ width: 160 }} align="left">
                    <TableCell component="th" scope="row">
                      {row.Distance}
                      {/* <div>
                        {data.map((item) => (
                          <p key={item.id}>
                            {item.Distance}
                          </p>
                        ))}
                      </div> */}
                    </TableCell>

                  </TableCell>
                  <TableCell style={{ width: 160 }} align="left">
                    <Stack spacing={2} direction="row">
                      <Button
                        variant="contained"
                        color="success"
                        onClick={() => approvalStatus(row.MemberID, row.PictureID, "Accepted")}
                      >
                        Accept
                      </Button>
                      <div>
                        <Button variant="contained" color="error" onClick={() => handleButtonClick(row.MemberID, row.PictureID)}>
                          Reject
                        </Button>
                        <Modal
                          open={open}
                          onClose={handleClose}
                          aria-labelledby="modal-modal-title"
                          aria-describedby="modal-modal-description"
                        >
                          <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h5" component="h2">
                              Reason for rejection:
                            </Typography>
                            <br />
                            <textarea
                              rows={8}
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