import { Box, Breadcrumbs, Link, Typography } from '@mui/material'
import React from 'react'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
const MuiBreadcrumbs = () => {
  return (
    <Box m={2} >
      <Breadcrumbs aria-label='breadcrumb' separator={<NavigateBeforeIcon/>}
      maxItems={2}
      itemsBeforeCollapse={2}

     >
        <Link href="#" underline="hover">Home</Link>
        <Link href="#" underline="hover">About</Link>
        <Link href="#" underline="hover">Use</Link>
        <Typography color="text.primary">shoes</Typography>
      </Breadcrumbs>
    </Box>
  )
}

export default MuiBreadcrumbs
