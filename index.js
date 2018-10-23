var rect = require("./rectangle");
var moment = require("moment-timezone")

function solveRect(l, b) {
    console.log("solving for rectangle with l = " + l + " and b = " + b);

    rect(l, b, (err, res) => {
        if (err) {
            console.log("ERROR : ", err.message)
        } else {
            console.log("area of the rectangle of dimentions l = " + l + ", and b = " + b + " is " + res.area());
            console.log("perimeter of the rectangle of dimentions l = " + l + ", and b = " + b + " is " + res.perimeter())
        }
    })

    console.log("this statement is after call to rect")
}

function agetProtobufTimestamp(date) {
    console.log("Date "+date)
    let millis = date.getTime();
    let orderDate = moment(millis).format("MMMM Do, YYYY");
    console.log("IST date: "+orderDate);
    let pstOrderDate = moment(millis).tz('America/Los_Angeles').format("MMMM Do, YYYY");
    console.log("PST date: "+pstOrderDate);
    let remainingMilliseconds = millis % 1000;
    let seconds = (millis - remainingMilliseconds) / 1000;
    let nanos = remainingMilliseconds * 1000000;
    console.log("seconds :" + seconds);
    console.log("nanos :" + nanos);
};

function getDatefromProtobuftimestamp(seconds, nanos){
    let millis = seconds * 1000 + Math.floor(nanos % 1000000);
    console.log("Date :" + new Date(millis));
}

getDatefromProtobuftimestamp(1521163893,231000000);


//solveRect(2, 4);
//solveRect(3, 5);
//solveRect(5, 0);

agetProtobufTimestamp(new Date());


var config = require('tiny-config');

var connectionString = config.get('connectionString');
//"prod_connection_string"

var isStackTraceEnabled = config.get('errors.enableStackTrace');
//true
var retryConfig = config.get('serviceConfig.retryConfig');
//{"maxAttempts": 5}

var retryAttempts = config.get('serviceConfig.retryConfig.maxAttempts');
//5

//considering you have set `version` env var to "2.0.0"
var version = config.get("version");
//2.0.0

var all = config.getAll();
//Will return the map which has effective config settings

console.log(all);


var

var resp = JSON.parse(response);

console.log(resp);