import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../handlers/AuthContext';
import { getTransactionData, signUpCustomer } from "../../utils/api/team1";
import { getHighValueExpenses, getLastMonthMaxExpense, getLastXExpenses, getLastXTransactions, getUserData, getCreditCardData, addCreditCard } from "../../utils/api/team2";
import { deleteCreditCard, loginCustomer } from "../../utils/api/team3";

const Home = () => {
    const navigate = useNavigate();
    const { loggedInUser } = useAuth();
    let numberOfCards = getCreditCardData().creditcards.length;
    const currentmonth = new Date().getMonth() + 1;
    const transactionsData = getTransactionData();
    const sampledate = new Date(transactionsData.creditcards[0].transactions[0].transactionDate)

    console.log(currentmonth, sampledate)

    return (
        <Box sx={{ textAlign: 'center', mt: 8 }}>
            <Typography variant="h3" gutterBottom>
                Card Master Home
            </Typography>
            {loggedInUser && (
                <>
                    <p>Number of Cards: {numberOfCards}</p>
                    <Button onClick={getTransactionData}>TransactionData</Button>
                </>
            )}

        </Box>
    );
};

export default Home;