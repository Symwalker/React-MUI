import { Link, Stack } from '@mui/material'
import React from 'react'

const MuiLink = () => {
  return (
   <>
   <Stack>
    <Link href='#' variant='h2' underline='none'>Link</Link>
    <Link href='#' color="secondary"  variant='body1'>secondary</Link>
   </Stack>
   </>
  )
}

export default MuiLink
