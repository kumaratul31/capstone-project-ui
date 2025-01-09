import React from 'react';
import {Box, Typography} from '@mui/material';

const Transactions = () => {
    return (
        <Box sx={{ textAlign: 'center', mt: 8 }}>
            <Typography variant="h3" gutterBottom>
                Card Transactions
            </Typography>
        </Box>
    );
};

export default Transactions;