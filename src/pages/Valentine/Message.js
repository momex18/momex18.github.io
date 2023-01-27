import Button from '@mui/material/Button';


function Message({message, updateIndex}) {

  return (
    <div className="Message">
      {message.message}
      <br/>
      {
        message.button1 !== 'none' ?
        <Button
          variant="outlined"
          onClick={() => {
            updateIndex(1);
          }}
        >{message.button1}</Button> :
        ''
      }
      {
        message.button2 !== 'none' ?
        <Button
          variant="outlined"
          onClick={() => {
            updateIndex(2);
          }}
        >{message.button2}</Button> :
        ''
      }
    </div>
  );
}

export default Message;
