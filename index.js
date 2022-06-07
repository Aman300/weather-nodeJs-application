const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const ejs = require('ejs');
const moment = require('moment')



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
 res.render('index')
})


const axios = require('axios');

app.get('/weather', async function (req, res) {

  try {

    let stateName = req.query.stateName
    const options = {
      method: 'GET',
      url: `http://api.openweathermap.org/data/2.5/weather?q=${stateName}&units=metric&appid=4a95cd1c9a3a4dca54c0869ead637566`,
      // params: {
      //   q: stateName,
      //   //   lat: '0',
      //   //   lon: '0',
      //   //   callback: 'test',
      //   //   id: '2172797',
      //   //   lang: 'null',
      //   units: 'metric',

      // },
      // headers: {
      //   //'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
      // 'appid' : '4a95cd1c9a3a4dca54c0869ead637566'
      // }
    };
    let result = await axios(options)
    let filter = result.data
    //let fewData = filter.main
    //let filterTemp = fewData.temp
  
          let time = moment().format("dddd, MMMM Do YYYY");
          res.render('indexx', { data: filter, value: time})
          console.log({value: time})


  } catch (err) {
    console.log(err)
  }

})


app.listen(process.env.PORT || 3000, function () {
  console.log('Express app running on port ' + (process.env.PORT || 3000))
});
