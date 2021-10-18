const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000;

// tells express where to serve static files from
app.use(express.static(path.join(__dirname, 'client/build')));

// the server at port 5000 will see this data but not React on port 3000
// app.get("/api", (req, res) => {
//   res.json({ message: "Hello from server!" });
// });

app.get('/*', function(req, res) {
  console.log('Welcome to the application');
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});



app.listen(PORT, () => console.log(`The application is being served on localhost:${PORT}`));
