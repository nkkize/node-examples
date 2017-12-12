var rect = require("./rectangle");

function solveRect(l, b) {
    console.log("solving for rectangle with l = " + l + " and b = " + b);

    rect(l, b, (err, rectangle) => {
        if (err) {
            console.log("ERROR : ", err.message)
        } else {
            console.log("area of the rectangle of dimentions l = " + l + ", and b = " + b + " is " + rectangle.area());
            console.log("area of the rectangle of dimentions l = " + l + ", and b = " + b + " is " + rectangle.perimeter())
        }
    })

    console.log("this statement is after call to rect")
}


solveRect(2, 4);
solveRect(3, 5);
solveRect(5, 0);