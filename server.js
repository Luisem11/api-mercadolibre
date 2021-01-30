const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/api-mercadolibre'));
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/api-mercadolibre/index.html'));
});
app.set('port', process.env.PORT || 8080)
app.listen(app.get('port'));
console.log('Listen on port: ' + app.get('port'))
