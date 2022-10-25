"use strict";

var _express = _interopRequireDefault(require("express"));
var _path = _interopRequireDefault(require("path"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var nodemailer = require("nodemailer");
var bodyParser = require('body-parser');
var cors = require('cors');
var PORT = process.env.HTTP_PORT || 8080;
var app = (0, _express["default"])();
app.use(_express["default"]["static"](_path["default"].join(__dirname, 'client', 'build')));
app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.get('/', function (req, res) {
  res.send('just gonna send it');
});
app.post('/contact-us', function (req, res) {
  console.log(req.body);
  var transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    // true for 465, false for other ports
    requireTls: true,
    auth: {
      user: 'project.total.environment@gmail.com',
      // generated ethereal user
      pass: 'emxtozbzuknxtarc' // generated ethereal password
    }
  });

  // send mail with defined tran
  var mailOptions = {
    from: '"project.total.environment@gmail.com',
    // sender address
    to: "project.total.environment@gmail.com",
    // list of receivers
    subject: 'Total environment- rhopsody - lead',
    // Subject line
    text: JSON.stringify(req.body) // plain text body
    // html: "<b>(`NAME ${fullName}. Number ${phone}. Email ${email}`)</b>", // html body
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log('mail has sent', info.response);
    }
  });
  res.send(JSON.stringify(req.body));
});
app.listen(PORT, function () {
  console.log("Server listening at port ".concat(PORT, "."));
});
