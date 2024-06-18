import React from 'react';
import { Box, TextField, Button, MenuItem, Select, InputLabel, FormControl } from '@mui/material';

const ProductFilter = ({ categories, companies, onFilterChange }) => {
    return (
        <Box display="flex" justifyContent="space-between" mb={4}>
            <FormControl variant="outlined" style={{ minWidth: 120 }}>
                <InputLabel>Category</InputLabel>
                <Select
                    label="Category"
                    onChange={(e) => onFilterChange('category', e.target.value)}
                >
                    {categories.map((category) => (
                        <MenuItem key={category} value={category}>{category}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl variant="outlined" style={{ minWidth: 120 }}>
                <InputLabel>Company</InputLabel>
                <Select
                    label="Company"
                    onChange={(e) => onFilterChange('company', e.target.value)}
                >
                    {companies.map((company) => (
                        <MenuItem key={company} value={company}>{company}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            <TextField
                label="Min Price"
                variant="outlined"
                type="number"
                onChange={(e) => onFilterChange('minPrice', e.target.value)}
            />
            <TextField
                label="Max Price"
                variant="outlined"
                type="number"
                onChange={(e) => onFilterChange('maxPrice', e.target.value)}
            />
            <Button variant="contained" onClick={() => onFilterChange('reset')}>Reset</Button>
        </Box>
    );
};

export default ProductFilter;
