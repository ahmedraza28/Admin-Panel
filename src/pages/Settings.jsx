import React from 'react'
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

const Settings = () => {
    return (
        <>
            <div className='bgcolor'>
                <Navbar />
                <Box height={70} />
                <Box sx={{ display: 'flex' }}>
                    <Sidenav />
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <Stack spacing={2} direction="row" >
                                    <Card sx={{ minWidth: 49 + "%", height: 150 }} className='gradientlight'>
                                        <CardContent>
                                            <div className='iconstyle'>
                                                <CreditCardIcon />
                                            </div>
                                            <Typography gutterBottom variant="h5" component="div" sx={{ color: '#fff' }}>

                                                <CountUp delay={0.4} end={203} duration={0.8} /> Medicines
                                            </Typography>
                                            <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                                                Donation of this month at this time
                                            </Typography>

                                        </CardContent>
                                    </Card>
                                    <Card sx={{ minWidth: 49 + "%", height: 150 }} className='gradientlight'>
                                        <CardContent>
                                            <div className='iconstyle'>
                                                <CreditCardIcon />
                                            </div>
                                            <Typography gutterBottom variant="h5" component="div" sx={{ color: '#fff' }}>
                                                <CountUp delay={0.4} end={275} duration={0.8} /> Medicines
                                            </Typography>
                                            <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                                                Collection of this month at this time
                                            </Typography>

                                        </CardContent>
                                    </Card>
                                </Stack>
                            </Grid>
                            <Grid item xs={4}>
                                <Stack spacing={2}>
                                    <Card sx={{ maxWidth: 345 }} className='gradientlight'>

                                        <Stack spacing={2} direction="row"  >
                                            <div className='iconstyle'>
                                                <MedicationIcon />
                                            </div>

                                            <div className='paddingall'>
                                                <span className='pricetitle'><CountUp delay={0.4} end={678} duration={0.8} /> Medicines</span>
                                                <br />
                                                <span className='pricesubtitle'>Total Medicines Available</span>
                                            </div>
                                        </Stack>

                                    </Card>
                                    <Card sx={{ maxWidth: 345 }} className='gradientlight'>

                                        <Stack spacing={2} direction="row"  >
                                            <div className='iconstyleblack'>
                                                <MedicationIcon />
                                            </div>

                                            <div className='paddingall'>
                                                <span className='pricetitle'><CountUp delay={0.4} end={107} duration={0.8} /> Medicines</span>
                                                <br />
                                                <span className='pricesubtitle'>Total Medicines Available</span>
                                            </div>
                                        </Stack>

                                    </Card>
                                </Stack>
                            </Grid>
                        </Grid>
                        <Box height={20} />
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <Card sx={{ height: 80 + "vh" }}>
                                    <CardContent>

                                        <RecipientsList />
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={4}>
                                <Card sx={{ height: 80 + "vh" }}>
                                    <CardContent>
                                        <Box height={50} />
                                        <PieChart />
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


























