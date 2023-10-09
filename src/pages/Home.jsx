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
import CountUp from 'react-countup';
import MedicineList from './medicines/MedicineList';
import PeopleIcon from '@mui/icons-material/People';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
const Home = () => {
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
                                                <MedicationIcon />
                                            </div>
                                            <Typography gutterBottom variant="h5" component="div" sx={{ color: '#fff' }}>
                                                <CountUp delay={0.4} end={203} duration={0.8} /> Total Medicines Available
                                            </Typography>

                                        </CardContent>
                                    </Card>
                                    <Card sx={{ minWidth: 49 + "%", height: 150 }} className='gradientlight'>
                                        <CardContent>
                                            <div className='iconstyle'>
                                                <PeopleIcon />
                                            </div>
                                            <Typography gutterBottom variant="h5" component="div" sx={{ color: '#fff' }}>
                                                <CountUp delay={0.4} end={275} duration={0.8} /> Total Donors
                                            </Typography>

                                        </CardContent>
                                    </Card>
                                </Stack>
                            </Grid>
                            <Grid item xs={4}>
                                <Stack spacing={2}>
                                    <Card sx={{ minWidth: 49 + "%", height: 150 }} className='gradientlight'>
                                        <CardContent>
                                            <div className='iconstyle'>
                                                <EmojiPeopleIcon />
                                            </div>
                                            <Typography gutterBottom variant="h5" component="div" sx={{ color: '#fff' }}>
                                                <CountUp delay={0.4} end={275} duration={0.8} /> Total Recipients
                                            </Typography>

                                        </CardContent>
                                    </Card>

                                </Stack>
                            </Grid>
                        </Grid>
                        <Box height={20} />
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Card sx={{ height: 100 + "vh" }}>
                                    <CardContent>

                                        <MedicineList />

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

export default Home