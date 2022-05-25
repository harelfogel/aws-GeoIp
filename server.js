const express = require('express');
require('dotenv');
const axios = require('axios').default;
const app = express();
const port = 8080;

app.get('/:IP', (req, res) => {
//   res.send('Hello World!')
  axios.get(`https://ep.api.getfastah.com/whereis/v1/json/${req.params.IP}`,{headers: {'Fastah-Key': `${process.env.FASTAH_KEY}`}})
  .then(function (response) {
    // handle success
    // console.log(response);
    res.send(JSON.stringify(response.data));
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
//   fetch('https://ep.api.getfastah.com/whereis/v1/json/auto', 
//         { mode: 'cors',
//           headers: {'Fastah-Key': '136ea10eb37341fcb01ea4a15a3677be'}
//         })
//   .then(response => response.json())
//   .then(data => console.log(data));
});