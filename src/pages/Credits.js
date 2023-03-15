//import logo from './logo.svg';
import '../App.css';
import * as React from 'react';
import { CenterModal, ModalTitle, ModalCloseTarget } from 'react-spring-modal';
import 'react-spring-modal/styles.css';
import Button from '@mui/material/Button';


function Credits() {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <div className="Credits">
          <>
          <p>
          </p>
            <Button sx={{ position: 'block'}} variant="contained" color="success" onClick={() => setOpen(true)}>Click Me Baby One More Time!</Button>
            <CenterModal isOpen={isOpen} onDismiss={() => setOpen(false)}>
              {/* Defaults to <h1> and gives it an id to make it the label for your modal */}
              <ModalTitle>Erin....</ModalTitle>
              <p>
              I hope you have/had a wonderful birthday!<br/>
              I wanted to dedicated this app/website to you.<br/>
              Because you are an amazing person.<br/>
              For the time I've know you,<br/>
              I knew you were special.<br/>
              You have creative talent,<br/>
              You have a personality that is so sophisticated.<br/>
              So unique.<br/>
              So special.<br/>
              Your voice is still that of angels.<br/>
              Heavenly and feminine yet deep and decadent.<br/>
              And you're beautiful too.<br/>
              The smile that lights up the room.<br/>
              You are one of a kind.<br/>
              You deserve the best things.<br/>
              That's why this site exists.<br/>
              To appreciate you.<br/>
              To show that you've made a lasting impact,<br/>
              In at least one person (Me!).<br/>
              So enjoy your day,<br/>
              Savor this moment,<br/>
              Think of this entrance to this new decade of life,<br/>
              As a beginning of a beautiful new chapter in your life.<br/>
              You will do amazing things,<br/>
              Because you yourself are amazing.<br/>
              <br/>
              <br/>
              -Brian
              </p>

              {/* Automatically adds onClick that dismisses modal */}
              <ModalCloseTarget>
                <button>Close</button>
              </ModalCloseTarget>
            </CenterModal>
          </>
    </div>
  );
}

export default Credits;
