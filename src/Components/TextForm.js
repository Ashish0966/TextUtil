import React, {useState} from 'react'

export default function TextForm(props) {
    const[text, setText]= useState('');
    const handleUpClick= ()=> {

         //console.log("Uppercase was clicked" + text);
         let newText= text.toUpperCase();
         setText(newText);
         props.showAlert(": Converted to Uppercase!", "success");
    }

    const handleLowClick= ()=> {

        //console.log("Uppercase was clicked" + text);
        let newText= text.toLowerCase();
        setText(newText);
        props.showAlert(": Converted to Lowercase!", "success");
   }

   const handleClearClick= ()=> {

    //console.log("Uppercase was clicked" + text);
    let newText= "";
    setText(newText);
    props.showAlert(": Text Cleared!", "success");
}

const handleCopy= ()=> {

    var text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert(": Copy to Clipboard!", "success");
} 

const handleExtraSpaces= ()=> {

   let newText = text.split(/[ ] + /);
   setText(newText.join(" "));
   props.showAlert(": Extra spaces removed!", "success");
} 


    
    const handleOnChange= (event)=> {
        //console.log("On change");
        setText(event.target.value)
}
    //text="new text" Wrong way to set text -
    // setText("new text") Corect way
    return (
        <>

        <div className='container' style={{color : props.mode==='dark' ?'white' : '#042743'}}>

        <h1>{props.heading} </h1>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode==='dark' ?'grey' : 'white' , color: props.mode==='dark' ?'white' : '#042743'}}></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>

        <div className="container my-3" style={{color : props.mode==='dark' ?'white' : '#042743'}} >
            <h1>Your text summary</h1>
            <p>{text.split(" ").filter((element)=>{return element.length!==0} ).length} words and {text.length} characters</p>
            <p> {0.008 * text.split(" ").length} Minutes read </p>
            <h2> Preview</h2>
            <p>{text.length>0 ? text:" Enter something to preview here" }</p>
        </div>

        </>
  )
}
