let apm =require('elastic-apm-node').start({
    serviceName: 'YOUR_SERVER_NAME',
    serverUrl: 'http://localhost:8200',
    captureBody: 'all',
    captureHeaders: true,
  });
const express = require('express');
const app = express();


const PORT = process.env.PORT || 8080


app.get('/', (req, res) => {
  // throw new Error('a')
  res.send('hello world');
});

app.listen(PORT, () => {
  console.log('listening on port', PORT);
});