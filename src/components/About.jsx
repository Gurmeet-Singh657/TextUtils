import React from "react";
import { useState } from "react";

export default function About(props) {
    // const [btntxt,setbtnText]=useState("Enable Light Mode");
    // const [mystyle,setmystyle]=useState({
    //     color:'black',
    //     backgroundColor:'white'
    // })
    
    // let toggleStyle=()=>{
    //     if(mystyle.color==='white')
    //     {
    //         setbtnText("Enable Dark Mode");
    //         setmystyle({
    //             color:'black',
    //             backgroundColor:'white'
    //         });
    //     }
    //     else
    //     {
    //         setbtnText("Enable Light Mode");
    //         setmystyle({
    //             color:'white',
    //             backgroundColor:'black',
    //             border:'2px solid white'
    //         })
    //     } 
    // }

    let mystyle={
      color:props.mode==='dark'?'white':'#042743',
      backgroundColor:props.mode==='dark'?'#042743':'white',
      border:'2px solid',
      borderColor:props.mode==='white'?'#042743':'white'
    }
  return (
    <div className="container"  style={mystyle}>
        <h1 className="my-3">About us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button style={mystyle}
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyze your text</strong>
            </button>
          </h2>
          <div  style={mystyle}
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body"  style={mystyle}>
            Textutils gives you a way to analyze your text quickly and efficiently. Be tit word count , character count or minutes read for a sentence
            </div>
          </div>
        </div>
        <div className="accordion-item"  style={mystyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"  style={mystyle}
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"  style={mystyle}
          >
            <div className="accordion-body"  style={mystyle}>
             Textutils is a free character counter tool that provides instant character count and word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item"  style={mystyle}>
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"  style={mystyle}
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div  style={mystyle}
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body"  style={mystyle}>
              This word counter software works in any web browsers such as Chrome , Firefox , Internet Explorer , Safari , Opera. It suits to count characters in facebook, blog , books, excel document, pdf document, essays, etc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
