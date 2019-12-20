var express = require('express');
var path = require('path');
var passport = require('passport');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');
var randomstring = require('randomstring')
var dbConn = mongodb.MongoClient.connect(process.env.MONGODB_URI); //heroku process env config var

const now = new Date()
var app = express();
//console.log(calcTime('Bombay', '+5.5'))

function calcTime(city, offset) {
    // create Date object for current location
    var d = new Date();

    // convert to msec
    // subtract local time zone offset
    // get UTC time in msec
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);

    // create new Date object for different city
    // using supplied offset
    var nd = new Date(utc + (3600000 * offset));

    // return time as a string
    return "Last scanned at" + ' ' + nd.toLocaleString();
}
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, 'public')));
var x;
app.get('/', function(req, res) {
    var ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
    var data = req.rawHeaders[25] || req.rawHeaders[9];
    console.log(data)
    res.render('pages/index.ejs', {
        ip: ip + '    ' + data
    })

})

app.get('/confirm', function(req, res) {

    var x = req.query['id']
    console.log(x)
    dbConn.then(function(db) {

        var dbo = db.db("heroku_n3nz65q4")
        dbo.collection("party-tym").find({ qrid: x }).toArray(function(err, result) {
            //  console.log(x)
            if (result.length !== 0) {
                res.send('QR Code Seems to be valid and was last scanned at : ' + JSON.stringify(result[0].time) + 'all rights reserved rahulbatra2019-20');
                dbo.collection('party-actual').insertOne(req.query)
                var newvalues = { $set: { used: "yes", time: calcTime('Bombay', '+5.5') } };
                dbo.collection("party-tym").updateOne({ qrid: x }, newvalues, function(err, res) {
                    if (err) throw err;
                    //   console.log("1 document updated");

                });
            }
            if (result.length == 0) {
                res.send('invalid id!')
            }
            //attempt to find a match with the entered ref id
        });

    });
});
app.use(function(req, res, next) {
    var ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
    res.status(404);

    res.format({
        html: function() {
            res.render('pages/index.ejs', {
                ip: ip
            })
        },
        json: function() {
            res.json({ error: 'Not found' })
        },
        default: function() {
            res.type('txt').send('Not found')
        }
    })
});
app.listen(process.env.PORT || 3000, process.env.IP || '0.0.0.0');