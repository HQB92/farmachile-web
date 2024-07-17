import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box sx={{ textAlign: 'center', py: 2, backgroundColor: '#1976d2', color: 'white', mt: 4 }}>
            <Typography variant="body2">© 2024 Farmacias de Turno. Todos los derechos reservados.</Typography>
        </Box>
    );
}

export default Footer;
