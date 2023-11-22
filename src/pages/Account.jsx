import React, { useEffect } from 'react'
import Sidenav from '../components/Sidenav'
import Box from '@mui/material/Box';
import Navbar from '../components/Navbar'
import Typography from '@mui/material/Typography';
import MedicineList from './medicines/MedicineList';
import Lists from './medicines/List';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useNavigate } from 'react-router-dom';

const Account = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem("adminEmail")) {
            navigate('/signin')
        }
    }, []);
    return (
        <>
            <div className="bgcolor">
                <Navbar />
                <Box height={70} />
                <Box sx={{ display: 'flex' }}>
                    <Sidenav />
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                        <Box height={20} />
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Card sx={{ height: 100 + "vh" }}>
                                    <CardContent>

                                        <MedicineList/>

                                    </CardContent>
                                </Card>
                            </Grid>

                        </Grid>
                    </Box>
                </Box>

            </div>
        </>
    )
}

export default Account

