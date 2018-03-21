// COMMENTS ARE LIKE THESE 

var fs = require("fs"); 

fs.writeFile ("movies.txt", "Inception, Shawshank Redemption, Die Hard", function(err) {

    if(err) {
        return console.log(error);
    }
    
    console.log("Wrote to file !") ;


}) ;