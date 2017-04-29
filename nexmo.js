var https = require('https');

var data = JSON.stringify({
 api_key: '34d8e15a',
 api_secret: 'e98330cbcf3e23d6',
 to: '92956170',
 from: 'Restaurant',
 text: 'Have you set up the models?'
});

var options = {
 host: 'rest.nexmo.com',
 path: '/sms/json',
 port: 443,
 method: 'POST',
 headers: {
   'Content-Type': 'application/json',
   'Content-Length': Buffer.byteLength(data)
 }
};

var req = https.request(options);

req.write(data);
req.end();

var responseData = '';
req.on('response', function(res){
 res.on('data', function(chunk){
   responseData += chunk;
 });

 res.on('end', function(){
   console.log(JSON.parse(responseData));
 });
})
