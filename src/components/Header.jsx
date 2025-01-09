import {useNavigate} from 'react-router-dom';
import {AppBar, Box, Toolbar, Typography} from "@mui/material";
import React from "react";

const Header = () => {

    return (
        <AppBar
            position="fixed"
            sx={{
                zIndex: (theme) => theme.zIndex.drawer + 1,
                background: 'linear-gradient(90deg, #064f8e 0%, #0071ce 100%)', // Gradient color
            }}
        >
            <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>

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
            </Toolbar>
        </AppBar>
    )
}

export default Header;