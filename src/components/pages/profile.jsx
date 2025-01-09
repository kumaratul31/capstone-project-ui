import React from 'react';
import {Box, Typography} from '@mui/material';

const Profile = () => {
    return (
        <Box sx={{ textAlign: 'center', mt: 8 }}>
            <Typography variant="h3" gutterBottom>
                User Profile
            </Typography>
        </Box>
    );
};

export default Profile;