import './App.css';
import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CottageIcon from '@mui/icons-material/Cottage';
import CardGiftcardSharpIcon from '@mui/icons-material/CardGiftcardSharp';
import ArticleSharpIcon from '@mui/icons-material/ArticleSharp';
import StarBorderSharpIcon from '@mui/icons-material/StarBorderSharp';

import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import someRoutes from "./Router";
import { useRoutes, navigate } from "hookrouter";

function App() {
   const mainRoutes = useRoutes(someRoutes);
  const [state, setState] = React.useState({
    appear: false,
  });

  const toggleDrawer = (appear) => {
    setState({ ...state, appear: appear });
  };

  const toggleDrawerNav = (text, appear) => {
    console.log("Text chosen is " + text);
    setState({ ...state, appear: appear });
    navigate("/" + text);
  }; //test comment
  
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      {/* <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Tinos" /> */}
      {/* <AppBar position="static" style={{ background: '#E6E6FA', color: '#848884' }}> */}
      <AppBar position="static" style={{ background: '#100C08', color: '#2A623D' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Erin's Constructible
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
            PaperProps={{
              sx: {
                backgroundColor: "black",
                color: "red",
              }
            }}
          
            variant="temporary"
            anchor={ 'left' }
            open={ state.appear }
            onClose={() =>toggleDrawer(false)}
            // sx={{ backgroundColor: 'black' }}
          >
            <List sx={{ width: 300, backgroundColor: '#100C08', color: '#2A623D' }}>
              <ListItem button key="Home" onClick={() => toggleDrawerNav("", false)}>
                 <ListItemIcon>
                   <CottageIcon sx={{ color: 'green' }} />
                 </ListItemIcon>
                 <ListItemText primary="Home" />
              </ListItem>
              <Divider />
              {['Card', 'Art', 'Credits'].map((text, index) => (
                <ListItem button key={text} onClick={() => toggleDrawerNav(text, false)}>
                  <ListItemIcon>
                  {index === 0 ? <CardGiftcardSharpIcon sx={{ color: 'green' }} /> : ''}
                  {index === 1 ? <ArticleSharpIcon sx={{ color: 'green' }} /> : ''}
                  {index === 2 ? <StarBorderSharpIcon sx={{ color: 'green' }} /> : ''}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Drawer>
          {mainRoutes}
    </div>
  );
}

export default App;
