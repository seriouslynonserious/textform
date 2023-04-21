import React,{useState} from 'react'




export default function TextForm(props) {
    const handleUpClick =()=>{
        console.log("Upper case was clicked"+ text);
        let newText= text.toUpperCase();
        setText(newText);
    }
    const handleLoClick =()=>{
        console.log("Upper case was clicked"+ text);
        let newText= text.toLowerCase();
        setText(newText);
    }
    const handleClearClick =()=>{
      console.log("Upper case was clicked"+ text);
      let newText= " ";
      setText(newText);
  }
  const handleCapitalize = () => {
    let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
    setText(newText);
}


const readTxt = (event) => {
  let file = event.target.files[0];
  let reader = new FileReader();
  reader.onload = function(event){
      setText(event.target.result);
  };
  reader.readAsText(file);
}

    const handleOnChange =(event)=>{
        console.log("onchange")
        setText(event.target.value);
    }
    

    const [text, setText] = useState('Enter text here');
    // setText("new Text");//correct way to change the state;
  return (
    <div className='box'>
    < div className="container my-3"  >
    
    
    <h1 className='heading my-3'>{props.heading}</h1>
    <hr class="border border-light border-3 opacity-75"/>

 
    </div>

    <div className="container ">
    <textarea className="form-control" value={text} onChange={handleOnChange}  rows="8"></textarea>
    <button className="btn btn-dark mx-2 my-2" onClick={handleUpClick} >Upper Case</button>
   <button className="btn btn-dark mx-2 my-2" onClick={handleLoClick} >Lower Case</button>
   <button className="btn btn-dark mx-2 my-2" onClick={handleClearClick} >Clear text</button>
   <button className="btn btn-dark mx-2 my-2" onClick={handleCapitalize}>Capital</button>
   
   
   
   
   <input type="file" className="btn btn-dark mx-3" accept="text/plain" onChange = {readTxt}/>
       <h3 className='my-4'>Your Text summary</h3>
       <p> {text.split(" ").length} words and {text.length} characters </p> 
       <p>{0.008 *text.split("").length } Minutes read</p>
      <h3 className='heading my-4'><hr className='border border-light border-3 opacity-75'/> Preview</h3>
      <p>{text}</p>
       
    </div>
    
    </div>
    
  )
}
