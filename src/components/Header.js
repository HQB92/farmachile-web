import React from 'react';
import { Typography, Box } from '@mui/material';

const Header = () => {
    return (
        <Box sx={{ textAlign: 'center', py: 2, backgroundColor: '#1976d2', color: 'white' }}>
            <Typography variant="h3">Farmacias de Turno</Typography>
            <Typography variant="subtitle1">Encuentra las farmacias de turno en tu ciudad y comuna</Typography>
        </Box>
    );
}

export default Header;
