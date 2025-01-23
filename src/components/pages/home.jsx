import React, {useEffect, useState} from 'react';
import { Typography, Box, Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { getTransactionData, signUpCustomer } from "../../utils/api/team1";
import {
    getHighValueExpenses,
    getLastMonthMaxExpense,
    getLastXExpenses,
    getLastXTransactions,
    getUserData,
    getCreditCardData,
    addCreditCard, getTransactions
} from "../../utils/api/team2";
import { deleteCreditCard, loginCustomer } from "../../utils/api/team3";
import Footer from "../Footer.jsx";

const Home = () => {
    const [creditCardData, setCreditCardData] = useState(null);
    useEffect( () => {
        async function fetchData() {
            const creditCards = await getCreditCardData('a2FydGhpa2c=', false);
            setCreditCardData(creditCards);
        }
        fetchData();
    }, []);

    const numberOfCards = creditCardData?.creditcards.length;

    return (
        <Box sx={{ textAlign: 'center', mt: 8 }}>
            <Typography variant="h3" gutterBottom>
                Card Master Home
            </Typography>

            <p>Number of Cards: {numberOfCards}</p>


            {/* Footer */}
            <Box component="footer" sx={{ p: 2, textAlign: 'center', width: '100%' }}> {/* Key change 2 */}
                <Footer />
            </Box>

        </Box>
    );
};

export default Home;