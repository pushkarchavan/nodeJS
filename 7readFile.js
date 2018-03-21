// COMMENTS ARE LIKE THESE 

var fs = require("fs"); 

fs.readFile('movies.txt', 'utf8', function(err,data) { 

    if(err) {
        return console.log(err);
    }

    console.log(data);
});