const http = require('http');
const fs = require('fs');
const express = require('express');
const app = express();
const body_parser = require('body-parser');
const WebSocketServer = require('ws').Server;
const json_parser = body_parser.json();
const path = require('path');
const port = 8080;
const global_data = [];
const ws = new WebSocketServer({ server: app });
const workoutPlaces = [{
  place: 'Opera',
  activeChallenges: ['run on the cascade', 'run 100m'],
  usersWhoActivatedCh: ['Edgar', 'Erik'],
  usersWhoCompletCh: [
    {username: 'Harut', challenge: 'run 100m', time: 10},
    {username: 'Robert', challenge: 'run 100m', time: 9},
    {username: 'Artem', challenge: 'run on the cascade', time: 300}
  ]
}];

app.use(express.static('public'));

app.get('/', (req, res) => {
  return res.set('Content-Type', 'text/html')
    .sendFile(path.resolve(__dirname, 'public/index.html'));
});
app.get('/main_sports_statistics', (req, res) => {
  const sendMeOff = JSON.stringify({
    message_type: 'new_statistics',
    payload: workoutPlaces,
  });
  console.log(workoutPlaces);
  res.end();
});
app.post('/add_record', json_parser, (req, res) => {
  console.log(req.body);
  workoutPlaces[req.body.placeNumber].usersWhoCompletCh.push(req.body.completedChallenge);
  const sendMeOff = JSON.stringify({
    message_type: 'added_record',
    payload: req.body.completedChallenge,
  });
  console.log(1);
  // webSocketServer.on('open', (ws) => {
    ws.clients.forEach((client) => {
      client.send(sendMeOff);
      console.log('ws');
    });
  // });
  console.log(workoutPlaces);
  res.end(JSON.stringify({result:"success"}));
});
app.post('/new_user_challenge', json_parser, (req, res) => {
  workoutPlaces[req.body.placeNumber].activeChallenges.push(req.body.newChallenge);
  workoutPlaces[req.body.placeNumber].usersWhoActivatedCh.push(req.body.username);
  const sendMeOff = JSON.stringify({
    message_type: 'added_challenge',
    payloadCh: req.body.newChallenge,
    payloadUser: req.body.username,
  });
//webSocketServer.on('open', (ws) => {
    ws.clients.forEach((client) => {
      client.send(sendMeOff);
    });
//  });
  console.log(workoutPlaces);
  res.end();
});
app.use(express.static('.'));
app.listen(port, () => console.log(`server on ${port}`));
