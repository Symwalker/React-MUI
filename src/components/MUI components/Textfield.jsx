import { Stack, TextField, InputAdornment } from '@mui/material'
import React, { useState } from 'react'

const TextfieldCmp = () => {
    const [value, setValue] = useState()
    return (
        <>
            <Stack direction='row' spacing={3}>
                <TextField label="name" variant='outlined' />
                <TextField label="name" variant='filled' />
                <TextField label="name" variant='standard' />
            </Stack>
            <Stack direction='row' spacing={3} sx={{ mt: 1 }}>
                <TextField label="small secondary" size='small' color='secondary' />
            </Stack>
            <Stack direction='row' spacing={3} sx={{ mt: 1 }}>
                <TextField label="small secondary" variant='outlined' helperText='do not share.' />
            </Stack>
            <Stack direction='row' spacing={3} sx={{ mt: 1 }}>
                <TextField
                    label="form input"
                    variant='outlined'
                    value={value}
                    onChange={(e)=>setValue(e.target.value)}
                    error={!value}
                    helperText={!value ? 'Required' :'do not share.' }
                     />
            </Stack>
            <Stack direction='row' spacing={3} sx={{ mt: 1 }}>
                <TextField label="small secondary" variant='outlined' disabled />
            </Stack>
            <Stack direction='row' spacing={3} sx={{ mt: 1 }}>
                <TextField label="small secondary" variant='outlined' InputProps={{ readOnly: true }} />
            </Stack>
            <Stack direction='row' spacing={2} sx={{ mt: 1 }}>
                <TextField label="amount" InputProps={{
                    startAdornment: <InputAdornment position='start'>$</InputAdornment>,
                }} />
                <TextField label="Weight" InputProps={{
                    endAdornment: <InputAdornment position='end'>KG</InputAdornment>,
                }} />
            </Stack>

        </>
    )
}

export default TextfieldCmp
