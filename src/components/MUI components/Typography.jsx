import { Typography } from '@mui/material'
import React from 'react'

const TypographyCmp = () => {
  return (
    <div>
      <Typography variant='h1'>h1 heading</Typography>
      <Typography variant='h2'>h2 heading</Typography>
      <Typography variant='h3'>h3 heading</Typography>
      <Typography variant='h4'>h4 heading</Typography>
      <Typography variant='h4' component="h1" gutterBottom="true">h1 heading but sizing of h4</Typography>
      <Typography variant='h5'>h5 heading</Typography>
      <Typography variant='h6'>h6 heading</Typography>


      <Typography variant='subtitle1'>subtitle1(h6 heading but small-size)</Typography>
      <Typography variant='subtitle2'>subtitle2(h6 heading but x-small-size)</Typography>
      
      <Typography variant='body1'>body1(paragraph element)</Typography>
      <Typography variant='body2'>body2(paragraph element but small-size)</Typography>

    </div>
  )
}

export default TypographyCmp
