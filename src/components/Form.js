import React,{useState} from 'react'




export default function Form(prop) {
  const [text, settext] = useState("");

  const Upclick = () =>{
    console.log("upper case was clicked "+ text);
    var newtext = text.toUpperCase();
    settext(newtext);
    prop.showAlert("upper case is done", "success")
    

  }
  const Loclick = () =>{
    var newtext = text.toLowerCase();
    settext(newtext);
    prop.showAlert("lower case is done", "success")

  }
  const Clearclick = () =>{
    var newtext = '';
    settext(newtext);
    prop.showAlert("Clear Text", "danger")

  }
  const Title = () =>{
    var newtext = text.charAt(0).toUpperCase() + text.slice(1) ;
    settext(newtext);
    prop.showAlert("title case is done", "success")

  }
  const Copyclick = () => {

    var copyText = document.getElementById("text");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  prop.showAlert("Copied Text", "success")
  }
  

  const ChangeClick = (event) =>{
  settext(event.target.value);

  }
  return (
    
    <>
  
    <div className="container my-3" style={{ color:prop.Mode ==='dark'?'white':'black' }}>
      <h1>Text changer</h1>
    <div className="mb-3">
  <textarea className="form-control" style={{ backgroundColor:prop.Mode ==='dark'?'#032136':'white', color:prop.Mode ==='dark'?'white':'black' }} id="text" value={text} onChange={ChangeClick} rows="9"></textarea>
  <button className="btn btn-outline-primary my-3" onClick={Upclick}>Convert Upper Case</button>
  <button className="btn btn-outline-success mx-3" onClick={Loclick}>Convert Lower Case</button>
  <button className="btn btn-outline-danger mx-3" onClick={Clearclick}>Clear Click</button>
  <button className="btn btn-outline-warning mx-3" onClick={Copyclick}>Copy Text</button>
  <button className="btn btn-outline-info mx-3" onClick={Title}>Title Form</button>
<h1>Text Counter | Character Counter</h1>
<div className="alert alert-success"  role="alert">
  {text.split(" ").join('').length} character and {text.length} word<br></br> 
  {0.08 *text.split(" ").length} minutes to read
</div>
  <h2>Preview Your Text</h2>
  <div className="alert alert-primary d-flex align-items-center" role="alert">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </svg>
  <div>
    {text.length>0?text:"Write Something to Preview in this object"}
  </div>
</div>
</div>
    </div>
    </>
  )
}
