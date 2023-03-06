import { Box, MenuItem, TextField } from '@mui/material'
import React, { useState } from 'react'

   
const MultipleSelectCmp = () => {
    const [countries, setCountries] = useState([])
    console.log({ countries });
    const handleChange = (event) => {
        const value = event.target.value 
        setCountries(typeof value === 'string' ? value.split(','):value)
    }
  return (
    <Box width='250px'>
    <TextField
        select
        label='select country'
        value={countries}
        onChange={handleChange}
        fullWidth
        SelectProps={{
            multiple:true
        }}
        size='small'
        color='secondary'
        
        >
        <MenuItem value='PK'>Pakistan</MenuItem>
        <MenuItem value='IN'>India</MenuItem>
        <MenuItem value='CH'>China</MenuItem>
    </TextField>

</Box>
  )
}

export default MultipleSelectCmp
