import React, {useEffect, useState} from "react";
import CardList from "./CardList";
import Transactions from "./Transactions";

import {Box, useMediaQuery} from "@mui/material";
import {useTheme} from "@mui/styles";
import {getCreditCardData, getTransactions} from "../../../utils/api/team2.jsx";
import Footer from "../../Footer.jsx";

const TransactionLayout = () => {
    const [userCreditCards, setUserCreditCards] = useState(null);
    const [userTransactions, setUserTransactions] = useState(null);
    const [selectedCard, setSelectedCard] = useState(null);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {
        async function fetchData() {
            const userCreditCards = await getCreditCardData('a2FydGhpa2c=', false);
            setUserCreditCards(userCreditCards);
            const userTransactions = await getTransactions('a2FydGhpa2c=', 100);
            setUserTransactions(userTransactions);
        }

        fetchData();
    }, []);

    return (<Box
        sx={{
            width: isMobile ? '100%' : 900,
            display: "flex",
            flexWrap: "wrap",
            position: "relative",
            justifyContent: "center",
        }}
    >
        {/* Left Panel - Credit Cards */}
        <Box
            sx={{
                width: isMobile ? '100%' : 400,
                flexDirection: 'row',
                flexShrink: 0,
                overflowY: 'auto',
                backgroundColor: "#fff",
                marginTop: 2
            }}
        >
            {userCreditCards ? (<CardList
                creditCards={userCreditCards.creditcards}
                setSelectedCard={setSelectedCard}
                selectedCard={selectedCard}
            />) : <></>}
        </Box>

        {/* Right Panel - Transactions */}
        <Box
            sx={{
                width: isMobile ? '100%' : 500,
                flex: 1,
                display: "flex",
                flexDirection: "column",
                overflowY: "auto",
                padding: {xs: 2, sm: 2.5},
                boxShadow: theme.shadows[2], // backgroundColor: "#f9f9f9",
            }}
        >
            {selectedCard && userTransactions ? (<Transactions
                selectedCard={selectedCard}
                userTransactions={userTransactions}
            />) : (<Box
                sx={{
                    textAlign: "center", marginTop: 4, color: "gray",
                }}
            >
                Please select a card to view transactions.
            </Box>)}
        </Box>

        {/* Footer */}
        <Box component="footer" sx={{p: 2, textAlign: 'center', width: '100%'}}> {/* Key change 2 */}
            <Footer/>
        </Box>
    </Box>);
};

export default TransactionLayout;
