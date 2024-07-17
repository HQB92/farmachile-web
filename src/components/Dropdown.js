import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const Dropdown = ({ label, options, value, onChange }) => {
    return (
        <FormControl fullWidth variant="outlined" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel>{label}</InputLabel>
            <Select value={value} onChange={onChange} label={label}>
                {options.map((option, index) => (
                    <MenuItem key={index} value={option.value}>{option.label}</MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

export default Dropdown;
