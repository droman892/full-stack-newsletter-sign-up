const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000;

const indexRouter = require('./client/routes/indexRoute');
const aboutRouter = require('./client/routes/aboutRoute');
const careersRouter = require('./client/routes/careersRoute');
const contactRouter = require('./client/routes/contactRoute');
const pressRouter = require('./client/routes/pressRoute');
const privacyRouter = require('./client/routes/privacyRoute');
const solutionsRouter = require('./client/routes/solutionsRoute');
const thankYouRouter = require('./client/routes/thankYouRoute');

// tells express where to serve static files from
app.use(express.static(path.join(__dirname, 'client/build')));

// the server at port 5000 will see this data but not React on port 3000
// app.get("/api", (req, res) => {
//   res.json({ message: "Hello from server!" });
// });

// For future functionality
// app.use('/about', aboutRouter);
// app.use('/careers', careersRouter);
// app.use('/contact', contactRouter);
// app.use('/press', pressRouter);
// app.use('/privacy', privacyRouter);
// app.use('/solutions', solutionsRouter);
// app.use('/thank-you', thankYouRouter);
// app.use('/', indexRouter);

app.get('/about', function(req, res) {
  console.log('You have reached the About route!');
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.get('/careers', function(req, res) {
  console.log('You have reached the Careers route!');
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.get('/contact', function(req, res) {
  console.log('You have reached the Contact route!');
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.get('/press', function(req, res) {
  console.log('You have reached the Press route!');
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.get('/privacy', function(req, res) {
  console.log('You have reached the Privacy route!');
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.get('/solutions', function(req, res) {
  console.log('You have reached the Solutions route!');
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.get('/thank-you', function(req, res) {
  console.log('You have reached the Thank You route!');
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.get('/', function(req, res) {
  console.log('You have reached the Index route!');
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.get('/*', function(req, res) {
  console.log('You have reached the Error route!');
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(PORT, () => console.log(`The application is being served on localhost:${PORT}`));