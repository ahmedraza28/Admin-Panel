import React, { useEffect } from 'react'
import Sidenav from '../components/Sidenav'
import Navbar from '../components/Navbar'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import '../Dash.css'
import MedicationIcon from '@mui/icons-material/Medication';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import PieChart from '../charts/PieChart';
import CountUp from 'react-countup';
import RecipientsList from './medicines/RecipientsList';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem("adminEmail")) {
            navigate('/signin')
        }
    }, []);
    return (
        <>
            <div className='bgcolor'>
                <Navbar />
                <Box height={70} />
                <Box sx={{ display: 'flex' }}>
                    <Sidenav />
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                        <Box height={20} />
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Card sx={{ height: 80 + "vh" }}>
                                    <CardContent>

                                        <RecipientsList />
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

export default Settings


























