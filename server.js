const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'client/build')));

const indexRouter = require('./client/routes/index');
const aboutRouter = require('./client/routes/about');
const careersRouter = require('./client/routes/careers');
const contactRouter = require('./client/routes/contact');
const pressRouter = require('./client/routes/press');
const privacyRouter = require('./client/routes/privacy');
const solutionsRouter = require('./client/routes/solutions');
const thankYouRouter = require('./client/routes/thank-you');
const errorRouter = require('./client/routes/error');

app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use('/careers', careersRouter);
app.use('/contact', contactRouter);
app.use('/press', pressRouter);
app.use('/privacy', privacyRouter);
app.use('/solutions', solutionsRouter);
app.use('/thank-you', thankYouRouter);
app.use('/*', errorRouter);

app.listen(PORT, () => console.log(`The application is being served on localhost:${PORT}`));