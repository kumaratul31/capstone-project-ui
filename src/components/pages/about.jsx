import React from 'react';
import {Box, Typography} from '@mui/material';
import Footer from "../Footer.jsx";

const About = () => {
    return (
        <Box sx={{ textAlign: 'center', mt: 8 }}>
            <Typography variant="h3" gutterBottom>
                About
            </Typography>
              {/* Team 1 */}
              <Typography variant="h6" gutterBottom>
                <strong>Team 1</strong>
            </Typography>
            <Typography variant="body1" gutterBottom>
                1. Customer registration 5<br />
                2. Customer registration - email validation 8<br />
                3. View the list of credit cards 5<br />
                4. Customize account settings/Edit account settings 3
            </Typography>

            {/* Team 2 */}
            <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                <strong>Team 2</strong>
            </Typography>
            <Typography variant="body1" gutterBottom>
                1. Add Credit Card after customer login 3<br />
                2. Customer can disable or enable their card 3<br />
                3. View top 10 transactions after customer login 5<br />
                4. View top 10 transactions when the credit card is enabled 5
            </Typography>

            {/* Team 3 */}
            <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                <strong>Team 3</strong>
            </Typography>
            <Typography variant="body1" gutterBottom>
                1. Login to customer - invalid case 3<br />
                2. Login to customer - first time - without validating email 3<br />
                3. Login to customer - valid case 3<br />
                4. When login, the password should not be sent over the network 5<br />
                5. When customer wants to view last x number of expenses of all cards 5
            </Typography>


            {/* Footer */}
            <Box component="footer" sx={{ p: 2, textAlign: 'center', width: '100%' }}> {/* Key change 2 */}
                <Footer />
            </Box>

        </Box>

    );
};

export default About;