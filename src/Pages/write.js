import React from 'react';
import { Box, Typography } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import WifiIcon from '@mui/icons-material/Wifi';

const Write = () => {
  return (
    <Box sx={{height:"40%", width:"100%",display:"flex", flexDirection:"row" }}>
     
      <Box sx={{ height: '100%', width: '28%',display:"flex", alignItems: "center" , flexDirection:"column"}}> 
      <Typography style={{ fontSize: '50px',fontFamily:"Aldrich",fontsize:'42px',color:"BLACK",marginLeft: "40px", marginTop: '60px', marginRight:'100px' }}>PARROTS HUB</Typography>
      
      </Box>
      <Box sx={{height:"100%", width:'80%',display:"flex", justifyContent:"right"}}>
      <Box sx={{height:"100%", width:"40%"}}>
      <Box sx={{height:"15%", width:"100%",gap:"4px", marginTop:"40px", display:"flex",justifyContent:"center", alignItems:'center', flexDirection:"row"}}>
      <Box sx={{height:"100%", width:"9%", borderRadius:"50%", backgroundColor:"rgb(204,224,47)", display:"flex", justifyContent:"center", alignItems:'center'}}>
      <TwitterIcon sx={{color:"rgb(100,109,0)"}}/>
      </Box>
      <Box sx={{height:"100%", width:"9%", borderRadius:"50%", backgroundColor:"rgb(204,224,47)", display:"flex", justifyContent:"center", alignItems:'center'}}>
      <FacebookIcon  sx={{color:"rgb(100,109,0)"}}/>
      </Box>
      <Box sx={{height:"100%", width:"9%", borderRadius:"50%", backgroundColor:"rgb(204,224,47)", display:"flex", justifyContent:"center", alignItems:'center'}}>
      <GoogleIcon  sx={{color:"rgb(100,109,0)"}}/>
      </Box>
      <Box sx={{height:"100%", width:"9%", borderRadius:"50%", backgroundColor:"rgb(204,224,47)", display:"flex", justifyContent:"center", alignItems:'center'}}>
      <WifiIcon sx={{color:"rgb(100,109,0)"}}/>
      </Box>
      </Box>
      <Box sx={{height:"15%", width:"100%",gap:"4px", marginTop:"10px", display:"flex", alignItems:'center', flexDirection:"row"}}>
      <Typography sx={{fontWeight:'bold',color:'rgb(219,230,177)'}}>Have a question?Call us and tell us toll free</Typography>
      </Box>
      <Box sx={{height:"12%", width:"100%",gap:"4px", display:"flex",justifyContent:'center', alignItems:'center', flexDirection:"row"}}>
      <Typography sx={{fontWeight:'bold',color:'rgb(219,230,177)'}}>+92 3024884371</Typography>
      </Box>

      </Box>
      </Box>

    </Box>
  );
}

export default Write;
