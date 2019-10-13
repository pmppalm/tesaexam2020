var config = require('./config');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const options = {
  useMongoClient: true,
    reconnectTries: 5000,
    reconnectInterval: 0,
    socketTimeoutMS: 100000,
    connectTimeoutMS: 100000
};
module.exports = function () {
  mongoose.set('debug', config.debug);
  var db = mongoose.connect('mongodb://heroku_jvp8kncs:tloup834159i629f624onibgbn@ds117101.mlab.com:17101/heroku_jvp8kncs', options).then(
      () => {
      console.log("connected to mongoDB")
    },
    (err) => {
      console.log("err", err);
    }
  );
  require('../app/models/user.model');
  require('../app/models/exam.model');
  return db;
}

