import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import HomeIcon from "@mui/icons-material/Home";
import AddCardIcon from "@mui/icons-material/AddCard";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ReceiptIcon from "@mui/icons-material/Receipt";
import SettingsIcon from "@mui/icons-material/Settings";
import InfoIcon from "@mui/icons-material/Info";

const siderItems = [
    { text: 'Home', key: 'home', icon: <HomeIcon /> },
    { text: 'Add Card', key: 'addcard', icon: <AddCardIcon /> },
    { text: 'Manage Card', key: 'managecard', icon: <CreditCardIcon /> },
    { text: 'Transactions', key: 'transactions', icon: <ReceiptIcon /> },
    { text: 'Profile', key: 'profile', icon: <SettingsIcon /> },
    { text: 'About', key: 'about', icon: <InfoIcon /> },
];

const Sidebar = () => {
    return (
        <Box
            sx={{
                color: 'grey.700',
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
                width: '100%',
            }}
        >
            {siderItems.map((item) => (
                <NavLink
                    key={item.key}
                    to={`/${item.key}`}
                    style={({ isActive }) => ({
                        textDecoration: 'none',
                        color: isActive ? '#6f2228' : 'inherit',
                        display: 'flex',
                        padding: '6px',
                        borderRadius: '4px',
                        backgroundColor: isActive ? 'rgba(0, 0, 255, 0.1)' : 'transparent',
                    })}
                >
                    {item.icon}
                    <Typography sx={{ ml: 1 }}>{item.text}</Typography>
                </NavLink>
            ))}
        </Box>
    );
};

export default Sidebar;
