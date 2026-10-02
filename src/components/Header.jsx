import React from 'react';
import { Typography, Box } from '@mui/material';
import logo from '../assets/logo.png';


const Header = () => {
    return (
        <Box sx={{
            textAlign: 'center',
            py: 2,
            backgroundColor: '#fcfcfc66',
            color: 'black'
        }}>
            <img src={logo} alt="Logo"
                 style={{height: '70px', marginBottom: '10px'}}/>
            <Typography variant="h3">Farmacias de Turno</Typography>
            <Typography variant="subtitle1">Encuentra las farmacias de turno en
                tu ciudad y comuna</Typography>
        </Box>
    );
}

export default Header;
