const http = require('http');
const fs = require('fs');
const express = require('express');
const app = express();
const body_parser = require('body-parser');
const json_parser = body_parser.json();
const port = 8080;
const workoutPlaces = [{
  place: 'Opera',
  activeChallenges: [
    {whoMade: 'Edgar', description: 'run on the cascade as fast as you can', name: 'Who is the fastest man?'},
    {whoMade: 'Erik', description: 'run 100m as fast as you can!', name: 'Is Usain Bolt slow??'}
  ],
  usersWhoCompletCh: [
    {username: 'Harut', challenge: 'run 100m', time: 10},
    {username: 'Robert', challenge: 'run 100m', time: 9},
    {username: 'Artem', challenge: 'run on the cascade', time: 300}]
  },
  {
  place: 'Cascade',
  activeChallenges: [
    {whoMade: 'Edgar', description: 'run on the cascade as fast as you can', name: 'Who is the fastest man?'},
    {whoMade: 'Erik', description: 'run 100m as fast as you can!', name: 'Is Usain Bolt slow??'}
  ],
  usersWhoCompletCh: [
    {username: 'Harut', challenge: 'run 100m', time: 10},
    {username: 'Robert', challenge: 'run 100m', time: 9},
    {username: 'Artem', challenge: 'run on the cascade', time: 300}]
  },
  {
    place: 'Monument',
    activeChallenges: [
      {whoMade: 'Edgar', description: 'run on the cascade as fast as you can', name: 'Who is the fastest man?'},
      {whoMade: 'Erik', description: 'run 100m as fast as you can!', name: 'Is Usain Bolt slow??'}
    ],
    usersWhoCompletCh: [
      {username: 'Harut', challenge: 'run 100m', time: 10},
      {username: 'Robert', challenge: 'run 100m', time: 9},
      {username: 'Artem', challenge: 'run on the cascade', time: 300}]
  }
];

app.use(express.static('public'));

app.get('/main_sports_statistics', (req, res) => {
  const sendMeOff = JSON.stringify({
    payload: workoutPlaces,
  });
  res.end(sendMeOff);
});
app.post('/add_record', json_parser, (req, res) => {
  workoutPlaces[req.body.placeNumber].usersWhoCompletCh.push(req.body.completedChallenge);
  res.end();
});
app.post('/new_user_challenge', json_parser, (req, res) => {
  workoutPlaces[req.body.placeNumber].activeChallenges.push(req.body.newChallenge);
  workoutPlaces[req.body.placeNumber].usersWhoActivatedCh.push(req.body.username);
  res.end();
});
app.listen(port, () => console.log(`server on ${port}`));
