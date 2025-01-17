import {Link, Typography} from '@mui/material';

export default function Footer(props) {
    return (
        <Typography variant="body2" color="primary" sx={{bottom: 0, width: "100%"}} {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://cardsystem.walmart.com/">
                WM Credit Card System
            </Link>{' '}
            {new Date().getFullYear()}
        </Typography>
    );
}