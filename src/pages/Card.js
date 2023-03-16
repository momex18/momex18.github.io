import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import { CenterModal, ModalTitle, ModalCloseTarget } from 'react-spring-modal';

function CardFunc(props)
{

    var picItems = [
      {
          name: "./meme_1.jpg",
          width: "300",
          height: "400",
          style: "cardCenter",
          description: "A funny meme!"
      },
      {
        name: "./meme_2.jpg",
        width: "300",
        height: "400",
        style: "cardCenter",
        description: "Another meme meme!"
      },
      {
        name: "./meme_4.jpg",
        width: "300",
        height: "400",
        style: "cardCenter",
        description: "Another meme meme!"
      },
      {
        name: "./meme_5.jpg",
        width: "300",
        height: "400",
        style: "cardCenter",
        description: "Another meme meme!"
      },
      {
        name: "./meme_6.jpg",
        width: "300",
        height: "400",
        style: "cardCenter",
        description: "Another meme meme!"
      },
      {
        name: "./meme_7.jpg",
        width: "300",
        height: "400",
        style: "cardCenter",
        description: "Another meme meme!"
      },
      {
        name: "./meme_8.jpg",
        width: "300",
        height: "400",
        style: "cardCenter",
        description: "Another meme meme!"
      },
      {
        name: "./meme_9.jpg",
        width: "300",
        height: "400",
        style: "cardCenter",
        description: "Another meme meme!"
      },
      {
        name: "./meme_10.jpg",
        width: "300",
        height: "400",
        style: "cardCenter",
        description: "Another meme meme!"
      },
      {
        name: "./meme_3.jpg",
        width: "300",
        height: "400",
        style: "cardCenter",
        description: "And another!"
      }
      // {
      //     name: "./frying_pan.jpg",
      //     width: "440", //480 default
      //     height: "300", // 384 default
      //     style: "cardCenter",
      //     description: "Hello World!"
      // }
  ]

    const [isOpen, setOpen] = React.useState(false);
    return (
      <div className="Credits">
        <>
          <p>
          </p>
            <Button sx={{ position: 'block'}} variant="contained" color="success" onClick={() => setOpen(true)}>Click for Memes</Button>
            <CenterModal isOpen={isOpen} onDismiss={() => setOpen(false)}>
              {/* Defaults to <h1> and gives it an id to make it the label for your modal */}
              <ModalTitle>Modal title</ModalTitle>
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
