const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));

mongoose.connect('mongodb+srv://david-admin:TiQ6tkf4bxgThxM7@full-stack-newsletter-c.mopns.mongodb.net/newsletterDB');

app.use(express.static(path.join(__dirname, 'client/build')));

const indexRouter = require('./routes/index');
const aboutRouter = require('./routes/about');
const careersRouter = require('./routes/careers');
const contactRouter = require('./routes/contact');
const pressRouter = require('./routes/press');
const privacyRouter = require('./routes/privacy');
const solutionsRouter = require('./routes/solutions');
const thankYouRouter = require('./routes/thank-you');
const testRouter = require('./routes/test');
const errorRouter = require('./routes/error');

app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use('/careers', careersRouter);
app.use('/contact', contactRouter);
app.use('/press', pressRouter);
app.use('/privacy', privacyRouter);
app.use('/solutions', solutionsRouter);
app.use('/thank-you', thankYouRouter);
app.use('/test', testRouter);
app.use('/*', errorRouter);

app.listen(PORT, () => console.log(`The application is being served on localhost:${PORT}`));