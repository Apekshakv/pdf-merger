const express = require('express');
const path = require('path');
const app = express();
const multer  = require('multer');
const { mergepdfs } = require('./testodf');  
const upload = multer({ dest: 'uploads/' });
app.use('/static', express.static('public'));//used to serve static files
const port = 8000; //assigning the port

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.post('/merge', upload.array('pdfs', 2), async (req, res, next) => {
  console.log(req.files);

  let d = await mergepdfs(path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path))
  res.redirect(`http://localhost:8000/static/${d}.pdf` )
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
