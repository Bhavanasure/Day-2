import { TextField, Typography,Button } from '@mui/material'
import React from 'react'

const First = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <input type="text" placeholder='Username'/>
      <br /><br />
      <input type="password" placeholder='Password' />
      <br /><br />
      <button>Login</button>
      <br />
      <br />
      <br />
      <br />
      <Typography variant='h3'>Login Page</Typography>
      <br /><br />
      <TextField id="outlined-basic" label="Username" variant="outlined" />
      <br /><br />
      <TextField id="filled-basic" label="Password" variant="filled" />
      <br /><br />
      <TextField id="standard-basic" label="Confirm Password" variant="standard" />
      <br /><br />
      <Button variant="text">Login</Button>&nbsp;&nbsp;
      <Button variant="contained" color='success'>Login</Button>&nbsp;&nbsp;
      <Button variant="standard">Login</Button>
    </div>

  )
}

export default First
