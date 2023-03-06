import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import React, { useState } from 'react'

const MuiRadioButton = () => {
    const [value,setValue] = useState('')
    console.log({value});
  return (
    <Box>
<FormControl>
    <FormLabel id="job-experience-group">Years of Experience</FormLabel>
    <RadioGroup 
    name='job-experience-group'
    aria-label='job-experience-group'
    value={value}
    onChange={(e)=>setValue(e.target.value)}
    row
    
    >
        <FormControlLabel control={<Radio size='small' color='secondary'/>} label='0-2' value='0-2'/>
        <FormControlLabel control={<Radio size='small' color='secondary'/>} label='3-6' value='3-6'/>
        <FormControlLabel control={<Radio size='small' color='secondary'/>} label='7-10' value='7-10'/>
    </RadioGroup>

</FormControl>
    </Box>
  )
}

export default MuiRadioButton
