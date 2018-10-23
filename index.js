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

solveRect(5, 0);

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
