//import logo from './logo.svg';
import '../App.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as React from 'react';



function Home() {
  const cardBoxHome = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h5" component="div">
          Welcome to
        </Typography>
        <Typography variant="h5" component="div">
          Erin's Constructible!
        </Typography>
        <p>
        This is a site dedicated to you, Erin!
        </p>
        <p>
          You are an amazing human and you deserve to be recognized for all the awesomeness you embody!
        </p>
        <p>
          Please use the top left navigation button to check out all the pages I (Brian) made for you!
        </p>
      </CardContent>
    </React.Fragment>
  );

  return (
    <div className="Home">
      <Box sx={{ minWidth: 275, height: 375, position: 'absolute', left: '50%', top: '50%', opacity: '0.9',transform: 'translate(-50%, -50%)' }}>
        <Card sx={{ backgroundColor: '#100C08', color: '#2A623D' }} variant="outlined">{cardBoxHome}</Card>
      </Box>
    </div>
  );
}

export default Home;
