const http = require('http');
const fs = require('fs');
const express = require('express');
const app = express();
const body_parser = require('body-parser');
const WebSocketServer = require('ws').Server;
const json_parser = body_parser.json();
const port = 8080;
const global_data = [];
const webSocketServer = new WebSocketServer({ server: app });

app.get('/', (req, res) => {
  fs.readFile('public/index.html', (err, file_data) => {
    res.end(file_data);
  });
});
app.post('/add_data', json_parser, (req, res) => {
  global_data.push(req.body);
  const sendMeOff = JSON.stringify({
    message_type: 'new_data',
    payload: req.body,
  });
  webSocketServer.clients.forEach((client) => {
    client.send(sendMeOff);
  })
  res.end(JSON.stringify({result:"success"}));
});
app.get('/init_data_call', (req, res) => {
  res.end(JSON.stringify(global_data));
})
app.use(express.static('.'));
app.listen(port, () => console.log(`server on ${port}`));
