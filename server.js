const express = require('express');
const app = express();
const port = process.env.PORT || 8090;

app.use(express.static(__dirname + '/dist'));

app.get('/*', function(req, res) {
    res.sendFile(__dirname + '/dist/index.html');
});

app.listen(port);

console.log('App runnig in port ' + port);