import React from "react";
import NavBar from "./Pages/navBar";
import Image from "./Pages/image"; 
import Write from "./Pages/write";
import './app.css';
import Display from "./Pages/display";
import Information from "./Pages/information"; 
import { Divider } from "@mui/material";
import Bottom from "./Pages/bottom";

function App() {
  return (
    <div style={{height:'100vh', width: '100vw', backgroundColor:"rgb(103,119,5)"}}>
      <NavBar />
      <Write />
      <Image />
      <Divider/>
      <Display />
      <Divider/>
      <Information/> 
      <Divider/>
      <Bottom/>
    </div>
  );
}

export default App;
