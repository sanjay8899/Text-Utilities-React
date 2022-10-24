import React , {useState} from "react"

export default function Textform(props){
    const [text,setText] = useState('');
    let changehandler = (event)=>{
    console.log("on change")
    setText(event.target.value)

    console.log(text)
    }

    const handleUpClick = ()=>{
        console.log("you want to convert to uppercase")
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("converted to uppercase", "success")
    }

    const handleLowClick = ()=>{
        console.log("you want to convert to uppercase")
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("converted to lowercase", "success")
    }

    const handleCopy = ()=>{
        console.log("you want to copy the text")
        let text = document.getElementById("mybox")
        text.select()
        navigator.clipboard.writeText(text.value)
        props.showAlert("text copied", "success")
    }

    return (
        <>
        <div className="container" style={{ color:props.mode ==='light'?'black':'white'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
        <textarea className="form-control" value={text} style={{backgroundColor : props.mode ==='light'?'white':'#6c757d', color:props.mode ==='light'?'black':'white'}} onChange={changehandler} id="mybox" rows="8"></textarea>
        </div>
        <button className={`btn btn-${props.mode==='light'?'primary':'dark'}`} onClick = {handleUpClick}>To Uppercase</button>
        <button className={`btn btn-${props.mode==='light'?'primary':'dark'} mx-3`} onClick = {handleLowClick}>To Lowercase</button>
        <button className={`btn btn-${props.mode==='light'?'primary':'dark'} `} onClick={handleCopy}>Copy Text</button>
        </div>
        <div className="container my-3" style={{ color:props.mode ==='light'?'black':'white'}}>
        <h2>Your text summary</h2>
        <b>{text.split(" ").length} words and {text.length} characters</b>
        <p><b>{Math.ceil(text.split(" ").length*0.008)} Minute Read</b></p>
        <h2>preview</h2>
        <p>{text.length>0?text:"Enter text above to see preview"}</p>
        </div>
        </>
    )
}