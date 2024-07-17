import React from 'react';
import { Box } from '@mui/material';

const Map = ({ src }) => {
    return (
        <Box sx={{ width: '100%', height: '450px', mt: 2 }}>
            <iframe
                src={src}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="farmacias-de-turno"
            ></iframe>
        </Box>
    );
}

export default Map;
