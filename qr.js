var mongodb = require('mongodb');
var dbConn = mongodb.MongoClient.connect(process.env.MONGODB_URI);
//const fs = require('fs')
var QRCode = require('qrcode')
var randomstring = require('randomstring')
for (var i = 0; i <= 100; i++) {
    dbConn.then(function(db) {
        let qid = randomstring.generate({
            length: 20,
            charset: 'alphanumeric'
        });

        var dbo = db.db("heroku_n3nz65q4");
        var myobj = { qrid: qid, time: "Never Scanned" };

        console.log(' inserted' + i + 'qrs')

        //   console.log('done with ' + i + 'qrs')
        var url = 'http://party.eq20.in/confirm?id=' + qid;
        QRCode.toFile(
            './output2/' + qid + '.png', url, [{ data: new Uint8ClampedArray([253, 254, 255]), mode: 'byte' }],

        )
        dbo.collection("party-tym").insertOne(myobj, function(err, res) {
            if (err) throw err;
            console.log("1 document inserted");

        });
    })

}
//process.exit()
