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
            <Button sx={{ position: 'block'}} variant="contained" onClick={() => setOpen(true)}>Angelika, thank you for...</Button>
            <CenterModal isOpen={isOpen} onDismiss={() => setOpen(false)}>
              {/* Defaults to <h1> and gives it an id to make it the label for your modal */}
              <ModalTitle>Angelika, thank you for...</ModalTitle>
              <p>
              Being you.<br/>
              For giving me the opportunity to talk to you,<br/>
              To make you smile,<br/>
              To make you happy,<br/>
              To make you feel valued,<br/>
              Loved,<br/>
              Appreciated.<br/>
              For letting me have conversations about anything no matter how silly they are.<br/>
              For the time you have for me.<br/>
              I'm lucky to know someone so amazing and I want to continue to talk to you and make you feel like you matter.<br/>
              That's why this website was made. It was made just for you.<br/>
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
