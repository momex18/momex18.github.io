//import logo from './logo.svg';
import '../App.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



function Art() {

  const cardBox = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h5" component="div">
          Card title
        </Typography>
        <p>
        Card contents
        </p>
      </CardContent>
    </React.Fragment>
  );

  return (
    <div className="Art">
          <h1>Art page!</h1>
          <p>
            Test text
          </p>
          <Box sx={{ minWidth: 275, height: 375, position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
            <Card sx={{ backgroundColor: '#4f4f4f', color: '#fff' }} variant="outlined">{cardBox}</Card>
          </Box>
    </div>
  );
}

export default Art;
