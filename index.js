const express = require('express');
const app = express();
const {GoogleAuth} = require('google-auth-library');
const { google } = require('google-auth-library');
const {OAuth2Client} = require('google-auth-library');
const keys = require('./oauth2.keys.json');
// Your Express app configuration

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

async function main() {
    const oAuth2Client = await getAuthenticatedClient();
    // Make a simple request to the People API using our pre-authenticated client. The `request()` method
    // takes an GaxiosOptions object.  Visit https://github.com/JustinBeckwith/gaxios.
    const url = 'https://people.googleapis.com/v1/people/me?personFields=names';
    const res = await oAuth2Client.request({url});
    console.log(res.data);
  
    // After acquiring an access_token, you may want to check on the audience, expiration,
    // or original scopes requested.  You can do that with the `getTokenInfo` method.
    const tokenInfo = await oAuth2Client.getTokenInfo(
      oAuth2Client.credentials.access_token
    );
    console.log(tokenInfo);
  }
  
 
var bodyParser=require('body-parser');
var cors=require('cors');


var router=express.Router();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api',router);

router.use((request,response,next)=>{
    console.log('middleware');
    next();
})
const nodemailer = require('nodemailer');

router.route('/email/').post(async (request,response)=>{
    const{from,to,sub,text}=request.body;
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          type: 'OAuth2',
          user: 'support@winscloudmatrix.com', // Your Gmail email address
          clientId: '902622774904-mchfoteulp9cm3dljc9e165g6krijjdd.apps.googleusercontent.com',
          clientSecret: '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',
          refreshToken: '1//04MTy0K4hi_uwCgYIARAAGAQSNwF-L9IrQ4VS1vpylkhUR_0cuy1QMkY3-XyShHlyAAQBO03jnYhog9G3c2rreLuajp2K0J8s_kA', // Retrieve this from the OAuth2 callback
          
        },
      });
    const mailOptions={from,to,sub,text};
    
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.error(error);
    }
    console.log(`Email sent Successfully: ${info.response}`);
    response.end();
  });
  }) 

  

 
  

  
    
