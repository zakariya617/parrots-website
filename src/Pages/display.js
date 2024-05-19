import { Box, Typography } from '@mui/material';
import React from 'react';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';

const Display = () => {
  return (
    <Box sx={{ height: '80%', width: '100%', display: 'flex', flexDirection: 'row', backgroundColor: "rgb(103,119,5)" }}>
      <Box sx={{ height: '80%', width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
        <Typography sx={{ fontSize: '50px', fontWeight: "bold", color: "rgb(222,91,39)" }}>WELCOME TO OUR SITE!</Typography>
        <Typography sx={{ fontFamily: 'revert', fontSize: '30px', color: "white", }}>Choosing the Right Bird for You and Your Family;</Typography>
        <Typography sx={{ fontFamily: 'revert', fontSize: '18px', color: "white", }}>You are more than welcome to Pericos House. We love birds, we have. It all started with a Finch, and now we currently breed African Gray Parrots, Red Rumped Parrots, Red Breasted Parakeets, Caiques, Conures, Amazons, and Macaws, just to name a few.</Typography>
        <Box sx={{ display: "flex", gap: '30px', justifyContent: "center", alignItems: 'self-start' }}>
          <PlayCircleFilledIcon sx={{ color: "rgb(100,109,0)" }} />
        </Box>
      </Box>
      <Box sx={{ height: '100%', width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <img src='http://pericoshouse.com/images/pa6.png?crc=345342576' alt="Logo" style={{ height: '70%', width: '70%', boxShadow: '10px 10px 10px 10px', borderRadius: "50%" }} />
      </Box>
    </Box>
  );
}

export default Display;
