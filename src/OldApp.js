//import logo from './logo.svg';
import './App.css';
import Inbox from './pages/Inbox'
import * as React from 'react';
import {Link} from "react-router-dom";
import AppBar from '@mui/material/AppBar';
//import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
//import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AndroidIcon from '@mui/icons-material/Android';
import CottageIcon from '@mui/icons-material/Cottage';

import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import someRoutes from "./Router";
import { useRoutes, navigate } from "hookrouter";

import ReactDOM from 'react-dom';
import { StyledEngineProvider } from '@mui/material/styles';

function App() {
   const mainRoutes = useRoutes(someRoutes);
  //const [state, setState] = React.useState(false);
  const [state, setState] = React.useState({
    appear: false,
  });

  const toggleDrawer = (appear) => {
    // if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    //   return;
    // }
    //console.log("Toggling! " + appear);
    //console.log("Toggling state.appear begin! " + state.appear);
    setState({ ...state, appear: appear });
    //console.log("Toggling state appear end! " + state.appear);
  };

  const toggleDrawerNav = (text, appear) => {
    console.log("Text chosen is " + text);
    setState({ ...state, appear: appear });
    // ReactDOM.render(
    //   <StyledEngineProvider injectFirst>
    //     <Inbox/>
    //   </StyledEngineProvider>,
    //   document.getElementById('root')
    // );
    navigate("/" + text);
  };

  // const list = () => (
  //   <Box
  //     sx={{ width: 300 }}
  //     role="presentation"
  //     onClick={toggleDrawer(false)}
  //     onKeyDown={toggleDrawer(false)}
  //   >
  //     <List>
  //       {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
  //         <ListItem button key={text}>
  //           <ListItemIcon>
  //             {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
  //           </ListItemIcon>
  //           <ListItemText primary={text} />
  //         </ListItem>
  //       ))}
  //     </List>
  //     <Divider />
  //     <List>
  //       {['All mail', 'Trash', 'Spam'].map((text, index) => (
  //         <ListItem button key={text}>
  //           <ListItemIcon>
  //             {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
  //           </ListItemIcon>
  //           <ListItemText primary={text} />
  //         </ListItem>
  //       ))}
  //     </List>
  //   </Box>
  // );
  
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <AppBar position="static" style={{ background: '#A32CC4' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            //onClick={() => { console.log('onClick'); }}
            onClick={() => toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Test new App
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
      <Drawer
            variant="temporary"
            anchor={ 'left' }
            open={ state.appear }
            onClose={() =>toggleDrawer(false)}
          >
            {/* {list('test')} */}
            {/* <div
            tabIndex={5}
            role="button"
            onClick={()=>toggleDrawer(false)}
            onKeyDown={()=>toggleDrawer(false)}
          >
            <div sx={{ width: 250 }}>
              <List>ola</List>
              <Divider />
              <List>xau</List>
            </div>
          </div> */}
            <List sx={{ width: 300 }}>
              <ListItem button key="Home" onClick={() => toggleDrawerNav("", false)}>
                 <ListItemIcon>
                   <CottageIcon />
                 </ListItemIcon>
                 <ListItemText primary="Home" />
              </ListItem>
              <Divider />
              {['Main', 'Card', 'Art', 'Credits'].map((text, index) => (
                <ListItem button key={text} onClick={() => toggleDrawerNav(text, false)}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <AcUnitIcon /> : <AndroidIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
            {/* <Divider />
            <List>
              {['All mail', 'Trash', 'Spam'].map((text, index) => (
                <ListItem button key={text} onClick={() => toggleDrawer(false)}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List> */}
          </Drawer>
          {/* <h1>Testing new app!</h1>
          <p>
            This is a test paragraph
          </p> */}
          {mainRoutes}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          I learned to use react!
        </p>
        <br/>
        <Button variant="contained" color="primary">
      Hello World
    </Button>
      </header> */}
      {/* { mainRoute } */}
    </div>
  );
}

export default App;
