var fs = require('fs');

function readFile(srcPath) {
    return new Promise(function (resolve, reject) {
        fs.readFile(srcPath, 'utf8', function (err, data) {
            if (err) {
                reject(err)
            } else {
                resolve(data);
            }
        });
    })
}

function writeFile(savPath, data) {
    return new Promise(function (resolve, reject) {
        fs.writeFile(savPath, data, function (err) {
            if (err) {
                reject(err)
            } else {
                resolve();
            }
        });
    })
}
readFile("./file.txt").then(function(results){
    let words = results.split("\n");
    let stringData = "";
    words.forEach(element => {
        stringData = stringData + "\"" + element + "\",\"" + element + "\"\n";
    });

    writeFile("results.txt",stringData);
 })