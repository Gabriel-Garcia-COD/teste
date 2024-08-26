const fs = require('fs');
// const https = require('https');
const express = require('express');

const app = express();
const port = 3027;

//SERVIDOR
// const options = {
//     key: fs.readFileSync(
//       "/home/ubuntu/Certificados/genesyscloudapps.coddera.com_key.txt"
//     ),
//     cert: fs.readFileSync(
//       "/home/ubuntu/Certificados/genesyscloudapps.coddera.com.crt"
//     ),
//     ca: [
//       fs.readFileSync(
//         "/home/ubuntu/Certificados/genesyscloudapps.coddera.com.ca-bundle"
//       ),
//     ],
//   };
  

// const options = {
//     key: fs.readFileSync('/Users/gabri/Documents/NOTECODDERA/certificate/genesyscloudapps.coddera.com_key.txt'),
//     cert: fs.readFileSync('/Users/gabri/Documents/NOTECODDERA/certificate/genesyscloudapps.coddera.com.crt'),
//     ca: [
//       fs.readFileSync('/Users/gabri/Documents/NOTECODDERA/certificate/genesyscloudapps.coddera.com.ca-bundle')
//     ]
//   };

// Middlewares para parse de JSON e URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rotas
app.get('/api/1', (req, res) => {
  res.send('GET request to the homepages');
});

app.post('/api/2', (req, res) => {
  res.send('POST request to the homepage');
});

app.put('/', (req, res) => {
  res.send('PUT request to the homepage');
});

app.delete('/', (req, res) => {
  res.send('DELETE request to the homepage');
});

// Rodar o servidor com HTTPS
// https.createServer(options, app).listen(port, () => {
//   console.log('Server HTTPS Listen port: ' + port);
// });

//RODAR O PROJETO COM HTTP
app.listen(port, () => {
  console.log(`🌏 Server is listening in port: ${port}`);
});