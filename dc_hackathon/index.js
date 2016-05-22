var express = require('express')
var app = express()
var path = require('path')
var port = 5000

var havenondemand = require('havenondemand')
var client = new havenondemand.HODClient('2c4f760b-08a4-4d0f-a7a8-c727ee2c2a3f')
var async = require('async')

app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', function(req, res) {
  console.log(payload)
  res.render('index', {
    information: payload //this is the entity informaiton you push to front end
  })
})


app.listen(port, function() {
  console.log('Listening on port: ' + port)
})

// Private functions

var urlArray = ['https://twitter.com/MSWindows7' , 'https://twitter.com/mubix?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor' ,
'https://twitter.com/taviso?lang=en' , 'https://twitter.com/TrustedSec?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor']
var payload = []

function process(url) {
  var data1 = {url: url, entity_type: ['people_eng', 'organizations']}
  client.call('extractentities', data1, function(err1, resp1, body1) {
    var entities = resp1.body.entities
    async.each(entities, function(entity, callback) {
      payload.push(entity)
    }, function(err) { })
  })
}

for (var i=0; i<urlArray.length; i++) {
  process(urlArray[i])
}
