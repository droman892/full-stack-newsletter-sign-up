const express = require('express');
// need body parser to read req.body
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));

// const mainRoutes = require('./client/routes');
// const indexRouter = require('./client/routes/indexRoute');
// const aboutRouter = require('./client/routes/aboutRoute');
// const careersRouter = require('./client/routes/careersRoute');
// const contactRouter = require('./client/routes/contactRoute');
// const pressRouter = require('./client/routes/pressRoute');
// const privacyRouter = require('./client/routes/privacyRoute');
// const solutionsRouter = require('./client/routes/solutionsRoute');
// const thankYouRouter = require('./client/routes/thankYouRoute');



// tells express where to serve static files from
app.use(express.static(path.join(__dirname, 'client/build')));

// the server at port 5000 will see this data but not React on port 3000
// app.get("/api", (req, res) => {
//   res.json({ message: "Hello from server!" });
// });

// For future functionality
// app.use(mainRoutes);
// app.use('/about', aboutRouter);
// app.use('/careers', careersRouter);
// app.use('/contact', contactRouter);
// app.use('/press', pressRouter);
// app.use('/privacy', privacyRouter);
// app.use('/solutions', solutionsRouter);
// app.use('/thank-you', thankYouRouter);
// app.use('/', indexRouter);

app.get('/about', (req, res) => {
  console.log('You have reached the About route!');
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.get('/careers', (req, res) => {
  console.log('You have reached the Careers route!');
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.get('/contact', (req, res) => {
  console.log('You have reached the Contact route!');
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.get('/error', (req, res) => {
  console.log('You have reached the Error route!');
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.get('/home', (req, res) => {
  console.log('You have reached the Home route!');
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.post('/home', (req, res) => {
  console.log(req.body);
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.get('/press', (req, res) => {
  console.log('You have reached the Press route!');
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.get('/privacy', (req, res) => {
  console.log('You have reached the Privacy route!');
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.get('/solutions', (req, res) => {
  console.log('You have reached the Solutions route!');
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.get('/thank-you', (req, res) => {
  console.log('You have reached the Thank You route!');
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// app.get('/', (req, res) => {
//   console.log('You have reached the Index route!');
//   res.redirect('/home');
//   res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
// });

app.get('/*', (req, res) => {
  console.log('You have reached the Error route!');
  res.redirect('/error');
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  
});

app.listen(PORT, () => console.log(`The application is being served on localhost:${PORT}`));