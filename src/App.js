import React,{useState,useEffect} from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [messageBody,setMessageBody] = useState('')
  const [email,setEmail] = useState('')

  useEffect(()=>{

  },[])

  const sendMessage =()=>{
    axios.post('/sendMessage',{messageBody,email}).then((res)=>{
      console.log(res.data)
      setEmail('')
      setMessageBody('')
      alert(` sent !`)
      
    }).catch((err)=> alert(err.response.request.response))

  }


  return (
    <div className="App">
      <header className="App-header">
    <img src='/QRcode_logo.jpg' className='qr-logo'></img> 
    <h1>QRcodes.lol</h1>
      </header>

    <h4> qrcode creation company</h4>

    <main>

    <p>Please send us a message if you have any inquiries </p>
    <br/>
    <h4>Email</h4>
    <div style={{ display:'flex', flexDirection:'row', alignItems:'center',justifyContent:'center'}}>
    <input onChange={(e)=>{setEmail(e.target.value)}} value={email}></input>
</div>  

    <h4>Message</h4>
   <div style={{ display:'flex', flexDirection:'row', alignItems:'center',justifyContent:'center'}}>
        <textarea onChange={(e)=>setMessageBody(e.target.value)} style={{height:'200px',width:'700px'}} value={messageBody}></textarea>
        </div>

      <button onClick={sendMessage}>Send</button>

    </main>

    </div>
  );
}

export default App;
