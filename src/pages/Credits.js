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
            <Button sx={{ position: 'block'}} variant="contained" onClick={() => setOpen(true)}>Modal title</Button>
            <CenterModal isOpen={isOpen} onDismiss={() => setOpen(false)}>
              {/* Defaults to <h1> and gives it an id to make it the label for your modal */}
              <ModalTitle>Modal title</ModalTitle>
              <p>
              Modal contents
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
