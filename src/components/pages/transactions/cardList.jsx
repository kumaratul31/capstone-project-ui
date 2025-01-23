import React from "react";
import {Box, Card, CardContent, Typography} from "@mui/material";
import {getCardIcon, getCardVendorStyle} from "../../../assets/styles/cardStyle.jsx";

const CardList = ({ creditCards, setSelectedCard, selectedCard }) => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                overflowY: "auto",
                height: "auto",
            }}
        >
            {creditCards.map((card) => {
                if (card.status === "disabled") return null;

                const logo = getCardIcon(card.wireTransactionVendor);
                const cardStyle = getCardVendorStyle(card.wireTransactionVendor);

                return (
                    <Card
                        key={card.creditCardId}
                        onClick={() => setSelectedCard(card)}
                        sx={{
                            width: "100%",
                            maxWidth: "360px",
                            height: "230px",
                            marginBottom: "20px",
                            padding: "50px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-end",
                            position: "relative",
                            borderRadius: "20px",
                            cursor: "pointer",
                            transition: "transform 0.3s, box-shadow 0.3s",
                            boxShadow: selectedCard?.creditCardId === card.creditCardId
                                ? "0px 4px 15px rgba(0, 0, 0, 0.3)"
                                : "0px 4px 12px rgba(0, 0, 0, 0.15)",
                            transform: selectedCard?.creditCardId === card.creditCardId ? "scale(1.05)" : "scale(1)",
                            background: cardStyle.background,
                            color: cardStyle.color,
                            "&:hover": {
                                transform: "scale(1.05)",
                                boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)",
                            },
                            "@media (max-width: 600px)": {
                                width: "90%",
                                height: "200px",
                            },
                        }}
                    >
                        <img
                            src={logo}
                            alt={card.wireTransactionVendor}
                            style={{
                                position: "absolute",
                                top: "15px",
                                left: "15px",
                                width: "50px",
                                height: "auto",
                                objectFit: "contain",
                            }}
                        />
                        <CardContent
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "flex-end",
                            }}
                        >
                            <Typography
                                variant="h6"
                                sx={{
                                    fontSize: "18px",
                                    fontWeight: "bold",
                                    letterSpacing: "2px",
                                    wordWrap: "break-word",
                                }}
                            >
                                {card.creditCardNumber.replace(/\d{4}(?=\d)/g, "**** ")}
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: "16px",
                                    marginTop: "8px",
                                }}
                            >
                                Expiry: {String(card.expiryMonth).padStart(2, "0")}/{card.expiryYear}
                            </Typography>
                        </CardContent>
                    </Card>
                );
            })}
        </Box>
    );
};

export default CardList;

