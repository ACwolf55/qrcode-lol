import React,{useState} from 'react';
import './App.css';

function App() {

  const [messageBody,setMessageBody] = useState('')
  const [email,setEmail] = useState('')

  const sendReferal =()=>{
    axios.post('/emailReferal',{messageBody,email}).then((res)=>{
      console.log(res.data)
      alert(`referral sent to ${friendEmail}!`)
    })
  }


  return (
    <div className="App">
      <header className="App-header">
    <img src='/QRcode_logo.jpg'></img> 
    <h1>QRcode.lol</h1>
    <h4> qrcode creation company</h4>
      </header>


    <main>
      
    <p>Email </p>
    <input onChange={(e)=>setFriendEmail(e.target.value)} placeholder='email'></input>
    <button onClick={sendReferal} >Send</button>



    </main>

    </div>
  );
}

export default App;
