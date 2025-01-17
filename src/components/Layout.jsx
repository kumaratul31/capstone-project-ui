import React, {useState} from 'react';
import {
    AppBar, Avatar, Box, CssBaseline, Drawer, IconButton, Menu, MenuItem, styled, Toolbar, Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Footer from './Footer.jsx';
import {Outlet} from "react-router-dom";
import Sidebar from "./SideBar.jsx";

const DRAWER_WIDTH = 240;

const Main = styled('main', {shouldForwardProp: (prop) => prop !== 'open'})(({theme, open}) => ({
    flexGrow: 1, padding: theme.spacing(3), transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp, duration: theme.transitions.duration.leavingScreen,
    }), marginLeft: 0, [theme.breakpoints.up('sm')]: {
        marginLeft: open ? DRAWER_WIDTH : 0,
    },
}),);

const AppBarOffset = styled('div')(({theme}) => theme.mixins.toolbar);

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

    const drawer = (<Box
            sx={{
                p: 3, width: DRAWER_WIDTH, display: 'flex', flexDirection: 'column', alignItems: 'center', // Adjust alignment based on collapsed state
                height: '100%', boxSizing: 'border-box', // Ensure padding is included in the width
            }}
        >
            {/* Sidebar Header */}
            <Typography
                variant="h6"
                component="div"
                gutterBottom
                sx={{
                    textAlign: 'center', mb: 3, // Add some spacing below the header
                }}
            >
                Sidebar
            </Typography>

            {/* Sidebar Items */}
            <Box>
                <Sidebar/>
            </Box>
        </Box>);

    return (
        <Box sx={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
            <CssBaseline/>
            <AppBar
                position="fixed"
                sx={{
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                    background: 'linear-gradient(90deg, #064f8e 0%, #0071ce 100%)',
                    transition: (theme) => theme.transitions.create(['margin', 'width'], {
                        easing: theme.transitions.easing.sharp, duration: theme.transitions.duration.leavingScreen,
                    }), ...(mobileOpen && { // Add mobile open style
                        width: `calc(100% - ${DRAWER_WIDTH}px)`, marginLeft: `${DRAWER_WIDTH}px`,
                    }),
                }}
            >
                <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <IconButton
                        color="inherit"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{mr: 2, display: {sm: 'none'}}}
                    >
                        <MenuIcon/>
                    </IconButton>

                    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexGrow: 1}}>
                        <img
                            src="../src/assets/cardIcon.png"
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
                            <MenuItem key="profile" onClick={handleMenuClose} sx={{color: 'grey.700'}}>
                                Profile
                            </MenuItem>
                            <MenuItem key="logout" onClick={handleLogout} sx={{color: 'grey.700'}}>
                                Logout
                                <LogoutIcon fontSize="small" sx={{ml: 1}}/>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </AppBar>

            <Box sx={{ display: 'flex', flexGrow: 1 }}>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: {xs: 'none', sm: 'block'}, width: DRAWER_WIDTH, flexShrink: 0, '& .MuiDrawer-paper': {
                            width: DRAWER_WIDTH, boxSizing: 'border-box', boxShadow: '2px 0 5px rgba(0, 0, 0, 0.2)',
                        },
                    }}
                    open // Always open for permanent drawer
                >
                    {drawer}
                </Drawer>

                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{keepMounted: true}}
                    sx={{
                        display: {xs: 'block', sm: 'none'}, '& .MuiDrawer-paper': {
                            width: DRAWER_WIDTH, boxSizing: 'border-box', boxShadow: '2px 0 5px rgba(0, 0, 0, 0.2)',
                        },
                    }}
                >
                    {drawer}
                </Drawer>

                {/* Main Content */}
                <Main open={mobileOpen}>
                    <AppBarOffset/> {/* This is the key change */}
                    <Outlet/>
                </Main>
            </Box>

            {/* Footer */}
        <Box
            component="footer"
            sx={{
                p: 0,
                textAlign: 'center',
                width: '100%', // Ensure full width
            }}
        >
            <Footer />
        </Box>
        </Box>);
}

export default Layout;
