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
import PeopleIcon from '@mui/icons-material/People';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const [activity, setActivity] = useState([])
    const [data, setData] = useState();
    const navigate = useNavigate();



    const totalActivity = async () => {
        try {
            const response = await axios.get('https://mlm-backend-mx3k.onrender.com/redemption/total-pending-redemption-requests')
            console.log("Response", response.data.activityRequestsCount, response.data.totalMembers, response.data.withdrawalRequestsCount);
            setActivity(response.data);
            //   console.log("response", data);

        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    //   console.log("response array", data);


    useEffect(() => {
        totalActivity();
    }, []);


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
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Stack spacing={2} direction="row" >
                                    <Card sx={{ minWidth: 49 + "%", height: 250 }} className='gradientlight'>
                                        <CardContent>
                                            <div className='iconstyle'>
                                                <PeopleIcon sx={{ width: '50px', height: '50px' }} />
                                            </div>
                                            <Typography gutterBottom variant="h5" component="div" sx={{ color: '#fff' }}>
                                                <Typography variant="h3" component="h2">
                                                    No of users: <b>{activity.totalMembers}</b>
                                                </Typography>

                                            </Typography>

                                        </CardContent>
                                    </Card>
                                    <Card sx={{ minWidth: 49 + "%", height: 250 }} className='gradientlight'>
                                        <CardContent>
                                            <div className='iconstyle'>
                                                <EmojiPeopleIcon sx={{ width: '50px', height: '50px' }} />
                                            </div>
                                            <Typography gutterBottom variant="h5" component="div" sx={{ color: '#fff' }}>
                                                <Typography variant="h3" component="h2">
                                                    Current withdrawal requests: <b>{activity.withdrawalRequestsCount}</b>
                                                </Typography>
                                            </Typography>

                                        </CardContent>
                                    </Card>
                                </Stack>
                            </Grid>
                        </Grid>
                        <Box height={20} />
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Card sx={{ height: 38 + "vh" }}>
                                    <Stack spacing={2}>
                                        <Card sx={{ minWidth: 49 + "%", height: 250 }} className='gradientlight'>
                                            <CardContent>
                                                <div className='iconstyle'>
                                                    <AccountBoxIcon sx={{ width: '50px', height: '50px' }} />
                                                </div>
                                                <Typography variant="h5" component="div" sx={{ color: '#fff' }}>
                                                    <Typography variant="h3" component="h2">
                                                        Current Activities: <b>{activity.activityRequestsCount}</b>
                                                    </Typography>
                                                </Typography>
                                            </CardContent>
                                        </Card>

                                    </Stack>

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