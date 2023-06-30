import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function FullWidthTextField(props) {
    const [text, setText] = useState("");

const handleOnClick = () =>{
    console.log("Here is the solution");
    let newString= text.toUpperCase();
     setText(newString);
  

}
const handleLowClick = () =>{
    // console.log("Here is the solution");
    let newString= text.toLowerCase();
     setText(newString);
  

}
const handleClear = () =>{
   
    let newString= "";
     setText(newString);
  

}
const handleCopyClick = () =>{
   console.log("I am Copying");
   var text = document.getElementById("fullWidth");
   text.select();
   navigator.clipboard.writeText(text.value)
    
  

}
const handleExtraSpace = () =>{
   let newText = text.split(/[ ]+/);
   setText(newText.join(" "))
    
  

}
const handleonChange = (event) =>{
    console.log("Onchange used");
    setText(event.target.value);
}
  return (
<>
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <h2>{props.head}</h2>
      <TextField fullWidth value={text} onChange={handleonChange} id="fullWidth"  />
      <Button
        variant="contained"
        sx={{
          width: 500,
          my: 1,
          maxWidth: '100%',
        
      
        }}
        onClick={handleOnClick}
      >
        Convert to UpperCase
      </Button>
      <Button
        variant="contained"
        sx={{
          width: 500,
          // my: 1,
          maxWidth: '100%',
        
      
        }}
        onClick={handleLowClick}
      >
        Convert to LowerCase
      </Button>
      <Button
        variant="contained"
        sx={{
          width: 500,
        my:1,
          maxWidth: '100%',
        
      
        }}
        onClick={handleClear}
      >
        Clear Text
      </Button>

      <Button
        variant="contained"
        sx={{
          width: 500,
          // my: 1,
          maxWidth: '100%',
        
      
        }}
        onClick={handleCopyClick}
      >
        Copy Text
      </Button>
      <Button
        variant="contained"
        sx={{
          width: 500,
          my: 1,
          maxWidth: '100%',
        
      
        }}
        onClick={handleExtraSpace}
      >
        Remove Extra Spaces
      </Button>
    </Box>
    <div className="container">
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} Words and {text.length} Characters</p>
      <p>{0.008 * text.split(" ").length} Minutes to read</p>

      <h3>Preview Text</h3>
      <p>{text}</p>
    </div>
  </div>
</>



    
  );
}