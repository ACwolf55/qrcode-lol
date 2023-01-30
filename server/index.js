const express = require('express')
const app = express()
const cors = require('cors')
const path =require('path')
require("dotenv").config(); 
const nodemailer = require('nodemailer');
const { measureMemory } = require('vm');

const {PORT} = process.env



app.use(express.json())
app.use(cors())
app.use(express.static(path.resolve(`${__dirname}/../build`))) 



app.post('/sendMessage',async (req,res)=>{
    
    const {messageBody,email} = req.body
    console.log(messageBody)
    const mailOptions={
        from:'alexcwolf5@gmail.com',
        to:'alexcwolf5@gmail.com',
        subject: 'QRcode.lol email message',
        text: ` ${messageBody} ~~ --> from: ${email}`
    }
    // pass:zjiunqmadmruutxo
    const transport = await nodemailer.createTransport({
        //   host: 'mail.privateemail.com', 
        //   port: 587, 
        //   // tls: { rejectUnauthorized: false},
        //   // secure: false, 
        //   debug: true, // show debug output
        // logger: true,
        //   auth:{
            //     user:'referral@overlap.services',
            //     pass:'sptjolmkzxnadwht'
            //   }
            host: 'smtp.gmail.com',
            port: 465,
            secure: true, // use SSL
            auth:{
        user:'1800plumberscottsdale2@gmail.com',
        pass:'bkmcxwsuuxpdynda'
      }
  
    })
    transport.sendMail(mailOptions,(error,info)=>{
        if(error){
            console.log(error)
            return res.status(400).send('error')
        }else{
            console.log('message sent') + info.response
        return res.status(200).send('message sent sent')
    }
})

})
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))