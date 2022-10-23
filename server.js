import express from 'express';
import path from 'path';
const nodemailer = require("nodemailer");
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = process.env.HTTP_PORT || 8080;
const app = express();
app.use(express.static(path.join(__dirname, 'client', 'build')));
app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('just gonna send it');
});
app.post('/contact-us', (req, res) => {
    console.log(req.query)
    res.send(JSON.stringify(req.body));
    // let transporter = nodemailer.createTransport({
    //     host: "smtp.gmail.com",
    //     port: 587,
    //     secure: false, // true for 465, false for other ports
    //     requireTls: true,
    //     auth: {
    //       user: 'project.total.environment@gmail.com', // generated ethereal user
    //       pass: 'emxtozbzuknxtarc' // generated ethereal password
    //     },
    //   });
    
    //   // send mail with defined tran
    //   var mailOptions = {
    //     from: '"project.total.environment@gmail.com', // sender address
    //     to: "project.total.environment@gmail.com", // list of receivers
    //     subject: "Hello ✔", // Subject line
    //     text: "Hello world?", // plain text body
    //     // html: "<b>Hello world?</b>", // html body
    //   };
    
    //   transporter.sendMail(mailOptions,function(err,info){
    //     if (err){
    //         console.log(err)
    //     }else{
    //         console.log('mail has sent', info.response);
    
    //     }
    //   })
    
  
});
app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}.`);
});



  
  

