import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export default function BackDrop({open}) {
  
console.log('desde backdrop')
  return (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: 100,}}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}