 const
     express = require('express'),
     app = express(),
     dotenv = require('dotenv'),
     fs = require('fs'),
     mongoose = require('mongoose'),
     bodyParser = require('body-parser')

 // loading .env config to process.env
 if (fs.existsSync(".env.dev")) {
     dotenv.config({ path: ".env.dev" });
 } else {
     dotenv.config({ path: ".env.example" }); // you can delete this after you create your own .env file!
 }

 // Express configuration
 app.set("port", process.env.PORT || 3000);
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: true }));

 // connection to the databases
 mongoose.connect(`${process.env.MONGODB_URI}`, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }).then(
     () => { /** ready to use. The `mongoose.connect()` promise resolves to undefined. */
         console.log('%c:Connected to the database-', 'background: #ff00dd; color: #00ff00', );
     },
 ).catch(err => {
     console.log(`MongoDB connection error. Please make sure MongoDB is running. ${err}`);
     // process.exit();
 });

 app.listen(app.get('port'), () => {
     console.log('%c:Listening on port--', 'background: #ff00dd; color: #00ff00', app.get('port'));
 });

 module.exports = app;
 const routes = require('./api/routes');