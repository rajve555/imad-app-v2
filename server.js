var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'https://www.google.co.in/search?biw=1366&bih=657&tbm=isch&sa=1&q=jay+puppala&oq=jay+puppala&gs_l=img.3...11321.11759.0.12571.0.0.0.0.0.0.0.0..0.0....0...1c.1.64.img..0.0.0.Smx8sdexM3M#imgrc=e0cPDRqs5KuLTM:'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
