import React, {useState} from 'react';
import {
    AppBar,
    Avatar,
    Box,
    CssBaseline,
    Drawer,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Footer} from './Footer.jsx';
import {Outlet} from "react-router-dom";
import Sidebar from "./SideBar.jsx";

const DRAWER_WIDTH = 240;

function Layout() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        alert('Logged out!');
        handleMenuClose();
    };

    const drawer = (
        <Box
            sx={{
                p: 3,
                width: DRAWER_WIDTH,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center', // Adjust alignment based on collapsed state
                height: '100%',
                boxSizing: 'border-box', // Ensure padding is included in the width
            }}
        >
            {/* Sidebar Header */}
            <Typography
                variant="h6"
                component="div"
                gutterBottom
                sx={{
                    textAlign: 'center',
                    mb: 3, // Add some spacing below the header
                }}
            >
                Sidebar
            </Typography>

            {/* Sidebar Items */}
            <Box>
                <Sidebar/>
            </Box>
        </Box>
    );


    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '90vh', // Full viewport height
        }}>
            <CssBaseline/>

            {/* Header */}
            <AppBar
                position="fixed"
                sx={{
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                    background: 'linear-gradient(90deg, #064f8e 0%, #0071ce 100%)', // Gradient color
                }}
            >
                <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
                    {/* Menu Button for Mobile */}
                    <IconButton
                        color="inherit"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{mr: 2, display: {sm: 'none'}}}
                    >
                        <MenuIcon/>
                    </IconButton>

                    {/* Logo Image and Title */}
                    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexGrow: 1}}>
                        <img
                            src="../src/assets/cardIcon.png"  // Replace with your image path
                            alt="CardMaster Logo"
                            style={{height: 40, marginRight: 8}}
                        />
                        <Typography variant="h6" noWrap>
                            Walmart CardMaster
                        </Typography>
                    </Box>
                    <Box>
                        <IconButton onClick={handleProfileMenuOpen}>
                            <Avatar>
                                <AccountCircleIcon/>
                            </Avatar>
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                        >
                            <MenuItem
                                key="profile"
                                onClick={handleMenuClose}
                                sx={{color: 'grey.700'}} // Adjust text color for "Profile"
                            >
                                Profile
                            </MenuItem>
                            <MenuItem
                                key="logout"
                                onClick={handleLogout}
                                sx={{color: 'grey.700'}} // Adjust text color for "Logout"
                            >
                                Logout
                                <LogoutIcon fontSize="small" sx={{ml: 1}}/>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Sidebar for larger screens */}
            <Drawer
                variant="permanent"
                sx={{
                    display: {xs: 'none', sm: 'block'},
                    width: DRAWER_WIDTH,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: DRAWER_WIDTH,
                        boxSizing: 'border-box',
                        boxShadow: '2px 0 5px rgba(0, 0, 0, 0.2)', // Shadow for sidebar
                    },
                }}
                open
            >
                {drawer}
            </Drawer>

            {/* Sidebar for smaller screens */}
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: {xs: 'block', sm: 'none'},
                    '& .MuiDrawer-paper': {
                        width: DRAWER_WIDTH,
                        boxSizing: 'border-box',
                        boxShadow: '2px 0 5px rgba(0, 0, 0, 0.2)', // Shadow for mobile sidebar
                    },
                }}
            >
                {drawer}
            </Drawer>

            {/* Main Content */}
            <Box sx={{ flexGrow: 1, p: 3 }}>
                {/* Render Nested Routes Here */}
                <Outlet />
            </Box>

            {/* Footer */}
            <Box
                component="footer"
                sx={{
                    p: 0,
                    mt: 'auto',
                    color: 'white',
                    textAlign: 'center',
                }}
            >
                <Footer />
            </Box>
        </Box>
    );
}

export default Layout;
