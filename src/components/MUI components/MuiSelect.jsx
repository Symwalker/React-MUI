import { Box, MenuItem, TextField } from '@mui/material'
import React, { useState } from 'react'

const MuiSelectCmp = () => {
    const [country, setCountry] = useState('')
    console.log({ country });
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCountry(event.target.value)

    }
    return (
        <Box width='250px'>
            <TextField
                select
                label='select country'
                value={country}
                onChange={handleChange}
                fullWidth
                >
                <MenuItem value='PK'>Pakistan</MenuItem>
                <MenuItem value='IN'>India</MenuItem>
                <MenuItem value='CH'>China</MenuItem>
            </TextField>

        </Box>
    )
}

export default MuiSelectCmp
