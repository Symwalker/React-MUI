import { Box, FormControlLabel, Switch } from '@mui/material'
import React, { useState } from 'react'

const MuiSwitch = () => {
    const [mode, setMode] = useState(false)
    console.log({mode});
    const handleSwitch = (e) =>{
        setMode(e.target.checked)
    }
  return (
    <Box>
      <FormControlLabel label={mode ? 'light mode' : 'dark mode'} control={<Switch  checked={mode} onChange={handleSwitch} />} />
    </Box>
  )
}

export default MuiSwitch
