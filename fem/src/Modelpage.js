import React from 'react';
import SofaModel from './components/SofaModel';
import { Button } from './styles/Button';
// import QRcode from 'react-qr-code'

// This page contains 
const Modelpage = () => {
  return (
    <>
    <div>
        <h2> <center > 3D Model </center></h2>
        <SofaModel />
       <center> <Button className="btn" >
            Copy Link.
          </Button></center>
    </div></>
  );
};

export default Modelpage;
