import { AppBar, Button, IconButton, Toolbar, Typography ,Stack} from '@mui/material'
import React from 'react'
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
const MuiNavbar = () => {
  return (
    <>
    <AppBar>
        <Toolbar>
            <IconButton size='large' edge="start" color="inherit" aria-label='logo' >
                <CatchingPokemonIcon/>
            </IconButton>
            <Typography variant='h6' component='div' sx={{flexGrow:1}}>POKEMONAPP</Typography>
            <Stack direction="row" spacing={2}>
                <Button color="inherit">Featurs</Button>
                <Button color="inherit">About</Button>
                <Button color="inherit">Home</Button>
                <Button color="inherit">Login</Button>
            </Stack>
        </Toolbar>
    </AppBar>
    </>
  )
}

export default MuiNavbar
