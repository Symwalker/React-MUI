import { Box, Drawer, IconButton, Typography } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
const MuiDrawer = ()=>{
    const [isDraweropem , setDrawerOpen] = useState(false)
  return (
    <>
    
    <IconButton 
    size='large'
    edge="start"
    color='primary.main'
    aria-label='meniIcon'
    onClick={() => setDrawerOpen(true)}
    >
        <MenuIcon />
    </IconButton>
    <Drawer anchor='left' open={isDraweropem} onClose={()=>setDrawerOpen(false)} >
    <Box p={2} width="250px" textAlign="center" role="presentation" >
        <Typography variant='h6' component="div">Sode Panel</Typography>
    </Box>
    {/* close wala icon neeche */}
    {/* <IconButton 
    size='large'
    // edge="end"
    color='primary.main'
    aria-label='meniIcon'
    onClick={() => setDrawerOpen(false)}
    sx={{marginLeft:"auto"}}
    >
        <MenuIcon />
    </IconButton> */}
    </Drawer>

    </>
  )
}

export default MuiDrawer


