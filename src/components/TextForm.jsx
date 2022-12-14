import React,{useState} from "react";


export default function TextForm(props) {
  let [text,setText]=useState('')
  const handleUpClick=()=>{
    // console.log("Uppercase was changed!!")
    let newText=text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Uppercase",'success')
  }
  const handleLoClick=()=>{
    let newText=text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lowercase",'success')
  }
  const handleOnChange=(event)=>{
    setText(event.target.value)
  }
  const handleClear=()=>{
    setText("");
    props.showAlert("Text Cleared",'success')
  }
  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra Spaces Removed",'success')
  }
  
  const handleCopy=()=>{
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied to Clipboard",'success')
  }
  // text="Hi Gurmeet !!" -> Wrong way to change the state
  // setText("new text") -> right way to change the state
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2 className="mb-4">{props.heading}</h2>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='dark'?'white':'black'}}></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClear}>Clear</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove WhiteSpaces</button>
    </div>
    <div className="conatiner my-3" style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>Your text Summary</h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} and {text.length} characters</p>
      <p>{ (0.008*text.split(/\s+/).filter((element)=>{return element.length!==0}).length).toFixed(2)} minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to Preview!"}</p>
    </div>
    </>
  );
}
