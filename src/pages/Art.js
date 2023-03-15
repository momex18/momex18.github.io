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
        The Best Day at the Beach
        </Typography>
        <p>
        The bright sun hitting my face.<br/>
        So radiating and warm.<br/>
        Just like your warmth.<br/>
        The wonderous sand,<br/>
        Soft and supportive,<br/>
        Just like your kindness.<br/>
        The clear blue water,<br/>
        Shining and beautiful,<br/>
        Just like your beauty.<br/>
        The sounds of waves,<br/>
        Tranquil and comforting,<br/>
        Just like your voice.<br/>
        The blue sky with hints of clouds,<br/>
        Perfect and sophisticated,<br/>
        Just like your personality.<br/>
        Everything about you,<br/>
        Is like the best day at the beach.<br/>
        Where the conditions are perfect.<br/>
        The sounds align perfectly with my ears.<br/>
        The view of the ocean and sunny sky,<br/>
        Paints the perfect picture to my eyes.<br/>
        The radiance of the warm sun,<br/>
        And the slight hint of the soft wind,<br/>
        Feels warm and comforting,<br/>
        The same feeling when I’m with you.<br/>
        Even if the memory was brief,<br/>
        I still savor that moment. <br/>
        No other feeling,<br/>
        No other sound,<br/>
        No other ounce of beauty,<br/>
        Can compare to you.<br/>
        My best day,<br/>
        At the beach.<br/>
        </p>
      </CardContent>
    </React.Fragment>
  );

  return (
    <div className="Art">
          {/* <h1>Art page!</h1>
          <p>
            Test text
          </p> */}
          <Box sx={{ minWidth: 275, height: 375, position: 'absolute', left: '50%', top: '50%', opacity: '0.9', transform: 'translate(-50%, -50%)' }}>
            <Card sx={{ backgroundColor: '#100C08', color: '#2A623D' }} variant="outlined">{cardBox}</Card>
          </Box>
    </div>
  );
}

export default Art;
