import express from 'express';
import path from 'path';
const nodemailer = require("nodemailer");
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = process.env.HTTP_PORT || 8080;
const app = express();
app.use(express.static(path.join(__dirname, 'client', 'build')));
app.use(cors());
import axios from 'axios'

const SECRET_KEY = '6LeEELAiAAAAAHyc05duw396PAR1Dt6cTW5NOCDp'

// Configuring body parser middlewarertyewy3ewttrewyt
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('just gonna send it');
});
app.post('/contact-us', (req, res) => {
  

    axios({
        url: 'https://www.google.com/recaptcha/api/siteverify?secret=${SECRET_KEY}&response=${contact-us}',
        method: 'post'
    }).then(({data})=>{
        console.log(data);
    })
  



    console.log(req.body)
    
    

    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        requireTls: true,
        auth: {
          user: 'project.total.environment@gmail.com', // generated ethereal user
          pass: 'emxtozbzuknxtarc' // generated ethereal password
        },
      });
    
      // send mail with defined tran
      var mailOptions = {
        from: '"project.total.environment@gmail.com', // sender address
        to: "project.total.environment@gmail.com", // list of receivers
        subject: 'Total environment- rhopsody - lead', // Subject line
        text: JSON.stringify(req.body), // plain text body
        // html: "<b>(`NAME ${fullName}. Number ${phone}. Email ${email}`)</b>", // html body
      };
    
      transporter.sendMail(mailOptions,function(err,info){
        if (err){
            console.log(err)
        }else{
            console.log('mail has sent', info.response);
    
        }
      }) 
      res.send(JSON.stringify(req.body)); 
});
app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}.`);
});



  
  

