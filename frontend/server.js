const express = require('express');
// const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;





// const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());


app.use(express.static(__dirname + './public/index'));

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, './public/index.html'));
});

app.listen(PORT, () => {
    console.log(`Express server is running on port: ${PORT}`)
});