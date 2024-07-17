import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const Dropdown = ({ label, options, value, onChange }) => {
    return (
        <FormControl fullWidth variant="filled" sx={{ m: 1, minWidth: 120, margin:0 }}>
            <InputLabel sx={{
                '&.Mui-focused': {
                    color: 'rgba(0, 0, 0, 0.8)',
                },
            }}>{label}</InputLabel>
            <Select
                value={value || ''} // Asegúrate de que el valor sea una cadena vacía en lugar de null
                onChange={onChange}
                label={label}
                sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.75)', // Fondo con 75% de opacidad
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgba(0, 0, 0, 0.75)', // Bordes con 75% de opacidad
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgba(0, 0, 0, 1)', // Bordes con 100% opacidad al pasar el ratón
                    },
                }}
            >
                {options.map((option, index) => (
                    <MenuItem key={index} value={option.value}>{option.label}</MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

export default Dropdown;
