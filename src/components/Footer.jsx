import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
    return (
        <div className="footer">
            <Box sx={{ textAlign: 'center', py: 2, backgroundColor: '#fcfcfc66', color: 'black', mt: 4 }}>
                <Typography variant="body2">©Hugo Esteban 2024. Todos los derechos reservados.</Typography>
            </Box>
        </div>
    );
}

export default Footer;
