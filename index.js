var rect = {
    perimeter : (x,y) => (2*(x+y)),
    area: (x,y) => (x*y)
};

function solveRect(l, b) {
    console.log("solving for rectangle with l = "+l+ " and b = "+b);

    if(l <=0 || b <=0){
        console.log("Rectangle dimensions should be greater than 0")
    } else{
        console.log("perimeter of the rectangle is : " +rect.perimeter(l,b));
        console.log("area of the rectangle is : " +rect.area(l,b));
    }
}


solveRect(2,4);
solveRect(3,5);
solveRect(5,0);