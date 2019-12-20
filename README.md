# QR Based Authentication System for Events (Used for Equilibria'20)

## Basics
I use a combination of express and mongodb to check and validate sign-ins to an events
additionally every single scan updates the timestamp of lastscan to the db

## How to use 
Change 'process.env.MONGODB_URI' to your own mongodb url or a db of your liking
QR.js is used to generate to qr code and upload it to the database
app.js runs the backend 
```
node app // start backend
node qr // generate qr codes
```
please also change the number of qr codes to be generated in qr.js please keep in mind an array starts it index from zero
(To generate 200 passes the loop shall go through 199 cycles and not 200 )
