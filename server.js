const express = require("express");
const path = require("path");
const port = process.env.PORT || 8080;
const app = express();
const publicPath = path.join(__dirname, 'dist');


app.use(express.static(__dirname + '/dist'));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html')), function(err) {             
     if (err) {                 
          res.status(500).send(err) 
          }        
     };
});

app.listen(port);

