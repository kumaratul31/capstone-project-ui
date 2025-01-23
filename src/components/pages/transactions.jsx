import React from 'react';
import {Box, Card, CardContent, Grid, IconButton, Typography} from '@mui/material';

import userCards from '../../utils/api/data/userCreditCards.json';
import {getCardIcon, getCardVendorStyle} from "../../assets/styles/cardStyle.jsx";

const Transactions = () => {
    console.log(userCards)
    return (
        <Box sx={{
            display: 'flex',
            overflowX: 'auto', // Enable horizontal scrolling
            p: 2, // Add some padding around the list
            maxWidth: '100%', // Ensure it doesn't overflow the container
            WebkitOverflowScrolling: 'touch', // For smoother scrolling on iOS
            scrollbarWidth: 'thin', // For modern browsers
            '&::-webkit-scrollbar': {
                height: '8px',
            },
            '&::-webkit-scrollbar-track': {
                background: '#f1f1f1',
            },
            '&::-webkit-scrollbar-thumb': {
                background: '#888',
                borderRadius: '4px',
            },
        }}>
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 2,
                    justifyContent: "center",
                    padding: 0,
                }}
            >
                {userCards.creditcards ? userCards.creditcards.map((card, index) => (
                        <Card
                            key={index}
                            sx={{
                                width: {xs: "100%", sm: 360}, // 100% for mobile, fixed width for larger screens
                                height: {xs: 200, sm: 230},
                                position: "relative",
                                color: getCardVendorStyle(card.wireTransactionVendor).color,
                                background: getCardVendorStyle(card.wireTransactionVendor).background,
                                borderRadius: 2,
                                boxShadow: 5,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                            }}
                        >
                            <CardContent>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontSize: {xs: ".9rem", sm: "1rem"},
                                        letterSpacing: 2,
                                        textAlign: "left"
                                    }}>
                                    {/* Card Type */}
                                    <img src={getCardIcon(card.wireTransactionVendor)} alt={card.wireTransactionVendor}
                                         align=""/>

                                    {/* Card Status */}
                                    <span style={{
                                        position: "inline-flex",
                                        float: "right",
                                        align: "center",
                                        color: `${card.status === 'enabled' ? 'lightgreen' : 'red'}`
                                    }}>
                                    {card.status.charAt(0).toUpperCase() + card.status.slice(1)}

                                        <IconButton
                                            color="primary"
                                            aria-label="add an alarm"
                                            onClick={() => toggleStatus(card)}
                                        >
                                    </IconButton>
                                </span>
                                </Typography>


                                {/* Valid From and Expiry */}
                                <Grid container spacing={1}
                                      sx={{marginTop: {xs: ".8", sm: "1.5"}, alignItems: "center", textAlign: "center"}}>
                                    <Grid item size={3}>
                                        <Typography variant="body2" sx={{fontSize: {xs: ".8rem", sm: ".9rem"}}}>Valid
                                            From</Typography>
                                        <Typography variant="body1" sx={{
                                            fontWeight: "bold",
                                            fontSize: {xs: ".8rem", sm: ".9rem"}
                                        }}>{card.valid_from}</Typography>
                                    </Grid>
                                    <Grid item size={5}>
                                        <Typography variant="body2"
                                                    sx={{fontSize: {xs: ".8rem", sm: ".9rem"}}}>Expiry</Typography>
                                        <Typography variant="body1" sx={{
                                            fontWeight: "bold",
                                            fontSize: {xs: ".8rem", sm: ".9rem"}
                                        }}>{card.expiry}</Typography>
                                    </Grid>
                                </Grid>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontSize: {xs: "1rem", sm: "1.2rem"},
                                        letterSpacing: 1,
                                        marginTop: 2,
                                        fontWeight: "bold",
                                        textAlign: "left",
                                    }}
                                >
                                    {userCards.nameOnTheCard.first ? `${userCards.nameOnTheCard.first} ${userCards.nameOnTheCard.last}` : userCards.nameOnTheCard}
                                </Typography>
                            </CardContent>
                        </Card>

                    ))
                    : <Typography
                        variant="h6"
                        sx={{
                            fontSize: "1.2rem",
                            letterSpacing: 1,
                            marginTop: 3,
                            fontWeight: "bold",
                            textAlign: "left",
                        }}
                    > No Credit Cards Data Found</Typography>
                }
            </Box>
        </Box>
    );
};

export default Transactions;