import { Box, Typography, } from '@mui/material'
import React from 'react'

const NavBar = () => {
    return (
        <Box sx={{ height: '7%', width: '100vw', backgroundColor: 'rgb(60,72,6)',display:'flex',flexDirection:'row' }}>
            <Box sx={{ height: '100%', width: '15%', display: 'flex', flexDirection: 'row', justifyContent: 'right', alignItems: 'center' }}>
                <Box sx={{ height: '50%', width: '80%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography sx={{ fontSize: '100%', fontWeight: 'bold', color: 'rgb(199,211,66)' }}>Home Page</Typography> 
                </Box>
            </Box>
            <Box sx={{ height: '100%', width: '90%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
            <Typography sx={{ fontSize: '100%', fontWeight: 'bold', color: 'rgb(118,121,106)' }}>About us</Typography>
            
            <Typography sx={{ fontSize: '100%', fontWeight: 'bold', color: 'rgb(118,121,106)' }}>STAFF</Typography>
           
            <Typography sx={{ fontSize: '100%', fontWeight: 'bold', color: 'rgb(118,121,106)' }}>BLOG</Typography>
            
            <Typography sx={{ fontSize: '100%', fontWeight: 'bold', color: 'rgb(118,121,106)' }}>Our Gallery</Typography>
           
            <Typography sx={{ fontSize: '100%', fontWeight: 'bold', color: 'rgb(118,121,106)' }}>Contacts</Typography>
            </Box>
            </Box>
            
    )

}
export default NavBar
