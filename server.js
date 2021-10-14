const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/static', express.static('public'));

const mainRoutes = require('./routes');
// const specificRoutes = require('./routes/cards');

app.use(mainRoutes);
// app.use('/specificRoutes', specificRoutes);

//this middleware creates the error object and hands it off to the error handler
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error');
});

app.listen(2000, () => {
    console.log('The application is running on localhost: 2000!')
});