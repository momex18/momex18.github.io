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
          The Amazing Angelika
        </Typography>
        <p>
        When I think of you,<br/>
        I think of amazing beauty.<br/>
        Splendid wonder<br/>
        Serene grace.<br/>
        You embody everything that is right and perfect in this world.<br/>
        Your lovely eyes,<br/>
        Your cute lips,<br/>
        Your flowing hair,<br/>
        Your sophisticated outfits,<br/>
        and the beautiful mind of yours.<br/>
        Your intelligence is wonderful,<br/>
        Your personality is pure bliss,<br/>
        and I feel encapsulated by the essence of you.<br/>
        I cannot help but be in amazement of you.<br/>
        All of you.<br/>
        </p>
      </CardContent>
    </React.Fragment>
  );

  return (
    <div className="Art">
          <h1>Art page!</h1>
          <p>
            I wrote you a poem. I hope you enjoy!
          </p>
          <Box sx={{ minWidth: 275, height: 375, position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
            <Card sx={{ backgroundColor: '#4f4f4f', color: '#fff' }} variant="outlined">{cardBox}</Card>
          </Box>
    </div>
  );
}

export default Art;
