const express = require('express');
const app = express();
app.use(express.static('public'));



app.listen(3000, () => {
    console.log('Server started on port 3000');
  });

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
  });