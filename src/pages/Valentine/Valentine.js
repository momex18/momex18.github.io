import { useState } from 'react';
import './Valentine.css';
import Message from './Message';

/*
States:

1. You've been hacked! LOL
2. However, I have one question for you.
3. Will you be my Valentine?
4. Yes: Yay! I'm on top of the world! Tell me you accepted :)
5. No: Please (if yes, go up)
6. No again: Okay :( -> Button is Okay ask me again
*/

function Valentine() {

  const messages = [
    {
      message: "You've been hacked! LOL",
      button1: "Oh no! What do I do?",
      button2: "none"
    },
    {
      message: "However, I have one question for you.",
      button1: "OK",
      button2: "none"
    },
    {
      message: "Will you be my Valentine?",
      button1: "Yes",
      button2: "No"
    },
    {
      message: "Yay! I'm on top of the world! Tell me you accepted!",
      button1: "none",
      button2: "none"
    },
    {
      message: "Please?",
      button1: "Yes",
      button2: "No"
    },
    {
      message: "Okay :(",
      button1: "Okay, maybe ask me again?",
      button2: "none"
    }

  ]

  const [index, setIndex] = useState(0);
  const [currentMessage, setCurrentMessage] = useState(messages[index]);

  // function incrementIndex() {
  //   const newIndex = index + 1;
  //   setIndex(newIndex);
  //   setCurrentMessage(messages[newIndex]);
  //   console.log("Index is now " + index);
  //   console.log("Message is now: " + currentMessage.message)
  // }

  function updateIndex(increment) {
    console.log("Current index is " + index);
    if (index === 4) {
      var newIndex = index - increment;
      if (increment === 2) {
        newIndex = newIndex + 3;
      }
      setIndex(newIndex);
      setCurrentMessage(messages[newIndex]);
    } else if (index === 5) {
      const newIndex = 2;
      setIndex(newIndex);
      setCurrentMessage(messages[newIndex]);
    }
      else {
      const newIndex = index + increment;
      setIndex(newIndex);
      setCurrentMessage(messages[newIndex]);
    }
  }

  return (
    <div className="Valentine">
      <header className="V-header">
        <Message message={currentMessage} updateIndex={updateIndex} />
        {/* <Button
          variant="outlined"
          onClick={() => {
            incrementIndex();
          }}
        >Hello</Button> */}
      </header>
    </div>
  );
}

export default Valentine;
