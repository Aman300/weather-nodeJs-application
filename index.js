const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const ejs = require('ejs');

app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', async function (req, res) {
 res.render('index')
})


const axios = require('axios');

app.get('/weather', async function (req, res) {

  try {

    let stateName = req.query.stateName
    const options = {
      method: 'GET',
      url: 'https://community-open-weather-map.p.rapidapi.com/weather',
      params: {
        q: stateName,
        //   lat: '0',
        //   lon: '0',
        //   callback: 'test',
        //   id: '2172797',
        //   lang: 'null',
        units: 'metric',

      },
      headers: {
        'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
        'X-RapidAPI-Key': '3739cc291bmshac6f35389dbf739p1ead3ajsnb07b98818ff5'
      }
    };
    let result = await axios(options)
    let filter = result.data
    let fewData = filter.main
    //let filterTemp = fewData.temp
  
     
          res.render('indexx', { data: filter })


  } catch (err) {
    console.log(err)
  }

})


app.listen(process.env.Port || 3000, function () {
  console.log("Express app running on port", + (process.env.Port || 3000))
});
