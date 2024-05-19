import { Box, Typography } from '@mui/material';
import React from 'react';

const Bottom = () => {
  return (
    <Box sx={{ height: '50%', width: '100%', display: 'flex',backgroundColor:'rgb(54,66,36)', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
      <Box sx={{ height: '87%', width: '30%',  display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: '20px' }}>
        <Typography sx={{ fontSize: '50px', fontWeight: "bold",fontFamily:'cursive', color: "yellow " }}>ABOUT</Typography>
        <Typography sx={{ fontSize: '15px', fontWeight: "bold", color: "rgb(176,176,29)", marginTop: '20px' }}>
          You are more than welcome to Pericos House. We love birds, we have. It all started with a Finch, and now we currently breed African Gray Parrots, Red Rumped Parrots, Red Breasted Parakeets, Caiques, Conures, Amazons, and Macaws, just to name a few. Feel free to check our site, check out our birds (available birds) gallery, and don't forget to contact us if you have any questions.
        </Typography>
      </Box>

      <Box sx={{ height: '87%', width: '30%',  display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
        <Typography sx={{ fontSize: '50px', fontWeight: "bold",fontFamily:'cursive', color: "yellow " }}>What‘s New?</Typography>
        <Box sx={{height:'40%', width:'30%', display:'flex', flexDirection:'column', justifyContent:'center'}}>
    <img src='https://media.istockphoto.com/id/157375891/photo/scarlet-macaws.jpg?s=612x612&w=0&k=20&c=rrvMxRyLm77jcnmnrGtdOpw0PTxo8mkNOUA_hO3RO1g=' alt="Logo" style={{height:'60%',boxShadow:'10px 10px 10px 10px', width:'100%', borderRadius:"50%"}}/>
   
    </Box>
    <Box sx={{height:'40%', width:'30%', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
    <img src='https://media.istockphoto.com/id/157375891/photo/scarlet-macaws.jpg?s=612x612&w=0&k=20&c=rrvMxRyLm77jcnmnrGtdOpw0PTxo8mkNOUA_hO3RO1g=' alt="Logo" style={{height:'60%',boxShadow:'10px 10px 10px 10px', width:'100%', borderRadius:"50%"}}/>
   
    </Box>
      </Box>

      <Box sx={{ height: '87%', width: '40%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Typography sx={{ fontSize: '50px', fontWeight: "bold",fontFamily:'cursive', color: "yellow " }}>Popular</Typography>
        <ul style={{ listStyleType: 'revert-layer' }}>
          <li><Typography variant="body1">Winged Wisdom Magazine</Typography></li>
          <li><Typography variant="body1">Species Information Page</Typography></li>
          <li><Typography variant="body1">Associations</Typography></li>
          <li><Typography variant="body1">Bird Clubs</Typography></li>
          <li><Typography variant="body1">Legal Matters</Typography></li>
          <li><Typography variant="body1">Veterinarians</Typography></li>
          <li><Typography variant="body1">Bird Ezines</Typography></li>
          <li><Typography variant="body1">Library of Articles</Typography></li>
        </ul>
      </Box>
    </Box>
  );
};

export default Bottom;
