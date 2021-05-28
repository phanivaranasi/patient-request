const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;
const app = express();
const publicPath = path.join(__dirname,'dist');

app.use(express.static(publicPath));


app.get('*', (req, res) => {
    console.log(publicPath)
    res.sendFile(path.resolve(publicPath, 'index.html'));
});

app.listen(port);