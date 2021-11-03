const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Connection to Mongo DB Atlas via processEnvPort for Heroku or localhost
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://david-admin:TiQ6tkf4bxgThxM7@full-stack-newsletter-c.mopns.mongodb.net/newsletterDB');

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!');
})

app.use(express.static(path.join(__dirname, 'client/build')));

const indexRouter = require('./routes/index');
const aboutRouter = require('./routes/about');
const careersRouter = require('./routes/careers');
const contactRouter = require('./routes/contact');
const pressRouter = require('./routes/press');
const privacyRouter = require('./routes/privacy');
const solutionsRouter = require('./routes/solutions');
const thankYouRouter = require('./routes/thank-you');
// const submissionsRouter = require('./routes/submissions');
const errorRouter = require('./routes/error');

app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use('/careers', careersRouter);
app.use('/contact', contactRouter);
app.use('/press', pressRouter);
app.use('/privacy', privacyRouter);
app.use('/solutions', solutionsRouter);
app.use('/thank-you', thankYouRouter);
// app.use('/submissions', submissionsRouter);
app.use('/*', errorRouter);

if (process.env.NODE_ENV === ' production') {
    app.use(express.static('client/build'));
}


app.listen(PORT, () => console.log(`The application is being served on localhost:${PORT}`));