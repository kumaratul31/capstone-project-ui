import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
    AppBar, Box, Toolbar, Typography,
    Avatar,
    IconButton,
    Menu,
    MenuItem
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { useAuth } from '../handlers/AuthContext'; // Custom Auth hook for context

const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const { loggedInUser, logout } = useAuth(); // Use auth context to get login state and logout function

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };
    return (
        // <AppBar
        //     position="fixed"
        //     sx={{
        //         zIndex: (theme) => theme.zIndex.drawer + 1,
        //         background: 'linear-gradient(90deg, #064f8e 0%, #0071ce 100%)', // Gradient color
        //     }}
        // >
        //     <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>

        //         {/* Logo Image and Title */}
        //         <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexGrow: 1 }}>
        //             <img
        //                 src="../src/assets/cardIcon.png"  // Replace with your image path
        //                 alt="CardMaster Logo"
        //                 style={{ height: 40, marginRight: 8 }}
        //             />
        //             <Typography variant="h6" component={Link} to="/home" sx={{ color: "white" }} noWrap>
        //                 Walmart CardMaster
        //             </Typography>
        //         </Box>
        //     </Toolbar>
        // </AppBar>
        <AppBar
            position="fixed"
            sx={{
                zIndex: (theme) => theme.zIndex.drawer + 1,
                background: 'linear-gradient(90deg, #064f8e 0%, #0071ce 100%)', // Gradient color
            }}
        >
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                {/* Menu Button for Mobile */}
                <IconButton
                    color="inherit"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { xs: 'block', sm: 'block', md: 'block', lg: 'block', xl: 'block' }, }}
                >
                    <MenuIcon />
                </IconButton>

                {/* Logo Image and Title */}
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexGrow: 1 }}>
                    <img
                        src="../src/assets/cardIcon.png"  // Replace with your image path
                        alt="CardMaster Logo"
                        style={{ height: 40, marginRight: 8 }}
                    />
                    <Typography variant="h6" component={Link} to="/home" sx={{ color: "white" }} noWrap>
                        Walmart CardMaster
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="body1" color="inherit" sx={{ marginRight: 2, fontSize: { xs: ".9rem", sm: "1rem" } }}>
                        Welcome, {loggedInUser.name.first ? loggedInUser.name.first : loggedInUser.name}
                    </Typography>
                    <IconButton onClick={handleProfileMenuOpen}>
                        <Avatar>
                            <AccountCircleIcon />
                        </Avatar>
                    </IconButton>
                    {!loggedInUser ? (
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                        >
                            <MenuItem
                                key="login"
                                component={Link}
                                to="/login"
                                sx={{ color: 'grey.700' }} // Adjust text color for "Profile"
                            >
                                Login
                            </MenuItem>
                            <MenuItem
                                key="signup"
                                component={Link}
                                to="/signup"
                                sx={{ color: 'grey.700' }} // Adjust text color for "Logout"
                            >
                                SignUp
                                <LogoutIcon fontSize="small" sx={{ ml: 1 }} />
                            </MenuItem>
                        </Menu>
                    ) :
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                        >
                            <MenuItem
                                key="profile"
                                component={Link}
                                to="/profile"
                                sx={{ color: 'grey.700' }} // Adjust text color for "Profile"
                            >
                                Profile
                            </MenuItem>
                            <MenuItem
                                key="logout"
                                onClick={logout}
                                sx={{ color: 'grey.700' }} // Adjust text color for "Logout"
                            >
                                Logout
                                <LogoutIcon fontSize="small" sx={{ ml: 1 }} />
                            </MenuItem>
                        </Menu>
                    }
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header;