import { Box, Typography } from '@mui/material'
import React from 'react'

const Information = () => {
  return (
    <Box sx={{height:'25%',width:'100%',display:'flex',flexDirection:'column', backgroundColor:"rgb(103,119,5)"}}>
    <Typography sx={{ fontWeight:'bold',color:'rgb(219,230,177)', marginLeft:'40px', marginTop:'15px'}}>Information</Typography>
    <ul>
    <li>Exotic Birds</li>
    <li>Parrots classified</li>
    <li>Birds supplies</li>
    <li>Birds care information</li>
    
  </ul>

  
    
    </Box>
  )
}

export default Information
