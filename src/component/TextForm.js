import React,{useState} from 'react'


export default function TextForm(props) {
const handleOnChange=(event)=>{
    //console.log("handle on change")
    setText(event.target.value)
}

    const handleUpClick =()=>{
        //console.log("converted to uppercase")
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to upper case","success")
    }
    const [text,setText] = useState("Enter text here");

    const handleLowClick=()=>{
        let newText=text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to Lower case","success")
    }

    const clearonclick=()=>{
        setText("")
    }

    const removextraspace=()=>{
        let newtext = text.split(/[ ]+/)
        setText(newtext.join(" "))
        props.showAlert("extra white spaces removed","success")
    }

    const copy=()=>{
        var text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("text copied","success")

    }

  return (
    <>
    <div className="container">
            <h1>Enter text to analyze</h1>
            
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label ">{props.heading}</label>
                <button className= "btn btn-primary mx-2" onClick={clearonclick}>Clear</button>
                <button className= "btn btn-primary mx-2" onClick={copy}>Copy</button>
                </div>
                <textarea className="form-control" id="myBox" style={{backgroundColor:(props.mode)==='dark'?'#212529':'white',color:(props.mode)==='dark'?'white':'black'}} value={text} onChange={handleOnChange} rows="10"></textarea>
            </div>
            <button className= "btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
            <button className= "btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
            <button className= "btn btn-primary mx-2" onClick={removextraspace}>Remove Extra Space</button>
           
    <div className="container my-3">
        
        <h2>Text Summary</h2>
        <p>{text.split(" ").length} words {text.length} characters</p>
        <p>Time to read:{0.008*text.split(" ").length}min</p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
  )
}
