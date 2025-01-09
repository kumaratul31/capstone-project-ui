import React from 'react';
import { Typography, Box } from '@mui/material';
import {useNavigate} from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
        <Box sx={{ textAlign: 'center', mt: 8 }}>
            <Typography variant="h3" gutterBottom>
                Card Master Home
            </Typography>
        </Box>
    );
};

export default Home;