import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Reg = () => {
  return (
    <div>
      <Typography variant='h3'>Registration Form</Typography>
      <TextField variant="outlined" label="Name" />
      <br /><br />
      <TextField variant="outlined" label="Age" />
      <br /><br />
      <TextField variant="outlined" label="EmailId" />
      <br /><br />
      <TextField variant="outlined" label="Father's Name" />
      <br /><br />
      <TextField variant="outlined" label="Mother's Name" />
      <br /><br />
      <TextField variant="filled" label="Password"  />
      <br /><br />
      <TextField variant="filled" label="Confirm Password"  />   
      <br /><br />
      <Button variant="contained" color='success'>Sbmit</Button>

    </div>
  )
}

export default Reg
