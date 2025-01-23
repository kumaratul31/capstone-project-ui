import * as React from 'react';
import {styled} from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'; // Import from @mui/icons-material
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import moment from 'moment'; // Import moment for date formatting

const TransactionDetails = ({transaction}) => {
    const formattedDate = moment(transaction.transactionDate).format('MM/DD/YYYY');
    const formattedAmount = `${transaction.transactionType === 'cr' ? '+' : '-'} ₹${Math.abs(transaction.transactionAmount).toFixed(2)}`;

    return (<Box sx={{display: 'flex', flexDirection: 'column', gap: 1}}>
        <Typography variant="body1"><strong>Date:</strong> {formattedDate}</Typography>
        <Typography variant="body1"><strong>Time:</strong> {transaction.transactionTime}</Typography>
        <Typography
            variant="body1"><strong>Type:</strong> {transaction.transactionType === 'cr' ? 'Credit' : 'Debit'}
        </Typography>
        <Typography variant="body1" sx={{color: transaction.transactionType === 'cr' ? 'green' : 'red'}}>
            <strong>Amount:</strong> {formattedAmount}
        </Typography>
        <Typography variant="body1"><strong>Description:</strong> {transaction.transactionDesc}</Typography>
    </Box>);
};

const StyledAccordion = styled(Accordion)(({theme}) => ({
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[1],
    borderRadius: theme.shape.borderRadius,
    width: '100%',
    marginBottom: theme.spacing(1),
}));

const Transactions = ({selectedCard, userTransactions}) => {
    if (!selectedCard || !userTransactions || !userTransactions.creditcards) {
        return <Typography variant="body1">No card or transaction data available.</Typography>;
    }

    const cardTransactions = userTransactions.creditcards.find((card) => card.creditCardId === selectedCard.creditCardId)?.transactions;

    if (!cardTransactions || cardTransactions.length === 0) {
        return <Typography variant="body1">No transactions found for this card.</Typography>;
    }

    return (<Box>
            <span>
                <Typography variant="body1"
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                fontSize: {xs: ".7rem", sm: "1.5rem"},
                                width: {xs: 215, sm: 400},
                                alignItems: 'center'
                            }}
                >
                    Transaction View
                </Typography>
            </span>

        {cardTransactions.map((transaction) => (<StyledAccordion key={transaction.transactionId}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls={`panel${transaction.transactionId}-content`} // Unique ID
                id={`panel${transaction.transactionId}-header`}       // Unique ID
            >
                <Typography variant="body1" sx={{
                    display: 'flex',
                    justifyContent: {xs: "space-between", sm: "space-between"},
                    fontSize: {xs: ".7rem", sm: "1rem"},
                    width: {xs: 215, sm: 400},
                    alignItems: 'center'
                }}>
                    <span>{moment(transaction.transactionDate).format('MM/DD/YYYY')}</span>
                    <span>{transaction.transactionDesc}</span>
                    <span style={{color: transaction.transactionType === 'cr' ? 'green' : 'red'}}>
                {`${transaction.transactionType === 'cr' ? '+' : '-'} ₹${Math.abs(transaction.transactionAmount).toFixed(2)}`}
              </span>
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <TransactionDetails transaction={transaction}/>
            </AccordionDetails>
        </StyledAccordion>))}
    </Box>);
};

export default Transactions;