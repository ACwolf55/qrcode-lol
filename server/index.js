const express = require('express')
const app = express()
const cors = require('cors')
const path =require('path')
require("dotenv").config(); 
const nodemailer = require('nodemailer')

const {PORT} = process.env



app.use(express.json())
app.use(cors())
app.use(express.static(path.resolve(`${__dirname}/../build`))) 



app.post('/emailReferal',async (req,res)=>{
    
    const {friendEmail,email} = req.body
    console.log(friendEmail)
    const mailOptions={
        from:'alexcwolf5@gmail.com',
        to:friendEmail,
        subject: 'You Have Been Referred!',
        text: ` YOU HAVE BEEN REFERRED! ${email} would like to share 1800-Plumber with you!`
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
            console.log('email sent') + info.response
        return res.status(200).send('email sent')
    }
})

})
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))