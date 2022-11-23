const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express()
const port = 4000

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/symbols', async (_, res) => {
  try {
    const results = await axios({
      url: `https://api.apilayer.com/fixer/symbols`,
      method: 'get',
      headers: {
        apikey: process.env.FIXER_API_KEY,
      },
    });

    return res.status(200).send(results?.data);
  } catch (err) {
    return res.status(500).json(err?.data);
  }
});

app.get('/convert', async (req, res) => {
  try {
    const { from, to, amount } = req?.query;
  const results = await axios({
    url: `https://api.apilayer.com/fixer/convert?from=${from}&to=${to}&amount=${amount}`,
    method: 'get',
    headers: {
      apikey: process.env.FIXER_API_KEY,
    },
  });

  return res.status(200).send(results?.data);
  } catch(err) {
    return res.status(500).json(err?.data);
  }
})

app.get('/historical-rates/:yearPeriod', async (req, res) => {
  try {
    const { yearPeriod } = req?.params;
    const { to, from } = req?.query;
    const results = await axios({
      method: 'get',
      url: `https://api.apilayer.com/fixer/${yearPeriod}?base=${from}&symbols=${to}`,
      headers: {
        apikey: process.env.FIXER_API_KEY,
      },
    });

    return res.status(200).send(results?.data); 
  } catch(err) {
    console.log(err);
    return res.status(500).json(err);
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
