import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import { CenterModal, ModalTitle, ModalCloseTarget } from 'react-spring-modal';

function CardFunc(props)
{

    var picItems = [
      {
          name: "./goldblum.jpg",
          width: "300",
          height: "400",
          style: "cardCenter",
          description: "Probably the most random thing you have ever seen!"
      },
      {
          name: "./goldblum2.jpg",
          width: "300", //480 default
          height: "240", // 384 default
          style: "cardCenterVertical",
          description: "Hello World!"
      }
  ]

    const [isOpen, setOpen] = React.useState(false);
    return (
      <div className="Credits">
        <>
          <p>
          </p>
            <Button sx={{ position: 'block'}} variant="contained" onClick={() => setOpen(true)}>Click to Open</Button>
            <CenterModal isOpen={isOpen} onDismiss={() => setOpen(false)}>
              {/* Defaults to <h1> and gives it an id to make it the label for your modal */}
              <ModalTitle>Hello...</ModalTitle>
              <Carousel navButtonsAlwaysVisible="true" autoPlay="false">
                {
                    picItems.map( (item, i) => <Item key={i} item={item} /> )
                }
            </Carousel>

              {/* Automatically adds onClick that dismisses modal */}
              <ModalCloseTarget>
                <Button sx={{ position: 'block', marginLeft: 'auto', marginRight: 'auto', width: '50%'}} variant="contained">
                  Close
                </Button>
              </ModalCloseTarget>
            </CenterModal>
          </>
      </div>
    )
}

function Item(props)
{
    return (
        <Paper>
            {/* <h2>{props.item.name}</h2>
            <p>{props.item.description}</p> */}
            <div class="divCardCenter">
            <img src={props.item.name} alt="jeff goldblum" width={props.item.width} height={props.item.height} class={props.item.style}/>
            </div>

            {/* <Button variant="contained" className="CheckButton">
                Check it out!
            </Button> */}
        </Paper>
    )
}

export default CardFunc;
