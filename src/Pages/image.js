import { Box, Typography } from '@mui/material'
import React from 'react'

const Image = () => {
  return (
    <Box sx={{height:'40%', width: '100%',display:'flex',flexDirection:'row',gap:"30px", justifyContent:'center'}}>
    <Box sx={{height:'100%', width:'15%', display:'flex', flexDirection:'column', justifyContent:'center'}}>
    <img src='https://media.istockphoto.com/id/157375891/photo/scarlet-macaws.jpg?s=612x612&w=0&k=20&c=rrvMxRyLm77jcnmnrGtdOpw0PTxo8mkNOUA_hO3RO1g=' alt="Logo" style={{height:'60%',boxShadow:'10px 10px 10px 10px', width:'100%', borderRadius:"50%"}}/>
    <Typography sx={{fontWeight:'bold',color:'rgb(219,230,177)', marginLeft:'40px', marginTop:'15px'}}>  Macaws  
    </Typography>
    </Box>
    <Box sx={{height:'100%', width:'15%', display:'flex', flexDirection:'column', justifyContent:'center'}}>
    <img src='https://t3.ftcdn.net/jpg/05/62/75/94/360_F_562759424_E2pE7vdqkq7sVsETURNLsjZxYHG0tNv1.jpg' alt="Logo" style={{height:'60%', width:'100%',boxShadow:'10px 10px 10px 10px', borderRadius:"50%"}}/>
    <Typography sx={{fontWeight:'bold',color:'rgb(219,230,177)', marginLeft:'40px', marginTop:'15px'}}>  Sun Cunors 
    </Typography>
    </Box>
    <Box sx={{height:'100%', width:'15%', display:'flex', flexDirection:'column', justifyContent:'center'}}>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc9TmvDWq5KoYIhEtp-5Fx9V5MHQy5BpDYM7WnI7B_Ag&s' alt="Logo" style={{height:'60%', boxShadow:'10px 10px 10px 10px',width:'100%', borderRadius:"50%"}}/>
    <Typography sx={{fontWeight:'bold',color:'rgb(219,230,177)', marginLeft:'40px', marginTop:'15px'}}> Amazons   
    </Typography>
    </Box>
    <Box sx={{height:'100%', width:'15%', display:'flex', flexDirection:'column', justifyContent:'center', }}>
    <img src='https://images.pexels.com/photos/97533/pexels-photo-97533.jpeg?cs=srgb&dl=pexels-sivakumar-b-97533.jpg&fm=jpg' alt="Logo" style={{height:'60%',boxShadow:'10px 10px 10px 10px', width:'100%', borderRadius:"50%"}}/>
    <Typography sx={{fontWeight:'bold',color:'rgb(219,230,177)', marginLeft:'60px', marginTop:'15px'}}> raw 
    </Typography>
    </Box>
    
    </Box>
  )
}

export default Image