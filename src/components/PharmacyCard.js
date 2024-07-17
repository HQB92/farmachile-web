import React from 'react';
import { Card, CardContent, Typography, Link } from '@mui/material';

const PharmacyCard = ({ name, address, phone, date, link }) => {
    return (
        <Card sx={{ minWidth: 275, m: 2 }}>
            <CardContent>
                <Typography variant="h5" component="div">{name}</Typography>
                <Typography variant="body2">Dirección: {address}</Typography>
                <Typography variant="body2">Teléfono: {phone}</Typography>
                <Typography variant="body2">Fecha: {date}</Typography>
                <Link href={link} target="_blank" rel="noopener noreferrer" sx={{ mt: 1, display: 'block' }}>Ver en Waze</Link>
            </CardContent>
        </Card>
    );
}

export default PharmacyCard;
