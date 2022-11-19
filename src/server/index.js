const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express()
const port = 4000

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/symbols', async (req, res) => {
  var myHeaders = new Headers();
  myHeaders.append("apikey", "5vMcecjmlCMCFSJhtEVxhQw3RnbWvasl");
  // const results = await axios({
  //     url: "https://api.apilayer.com/fixer/symbols?access_key=5vMcecjmlCMCFSJhtEVxhQw3RnbWvasl",
  //     method: 'get',
  //     headers: {
  //       apikey: '5vMcecjmlCMCFSJhtEVxhQw3RnbWvasl',
  //     },
  //   });
    return res.status(200).send({ symbols: []});
});

app.get ('/convert', async (req, res) => {
  const { from, to, amount } = req?.query;
  const results = await axios({
    url: `https://api.apilayer.com/fixer/convert?access_key=5vMcecjmlCMCFSJhtEVxhQw3RnbWvasl&from=${from}&to=${to}&amount=${amount}`,
    method: 'get',
    headers: {
      apikey: '5vMcecjmlCMCFSJhtEVxhQw3RnbWvasl',
    },
  });

  return res.status(200).send(results?.data);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
