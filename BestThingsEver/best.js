// includes the FS package for reading and writhing packages
var fs = require("fs");

// Running the readfile modules that's inside of FS
// Stores the read information into the variable "data"
fs.readFile("best_thing_ever.txt", "utf8", function(error, data) {

  // If the code experiences any errors it will log the error to the console.
  if (error) {
    return console.log(error);
  }
// or--------
//   // We will then print the contents of data
//   console.log(data);

//   // Then split it by commas (to make it more readable)
//   var dataArr = data.split(",");

//   // We will then re-display the content as an array for later use.
//   console.log(dataArr);

// });
// or------------
// break the string down by comma seperation and store the content
var output = data.split(",");

// loop through the newly created output array
for (var i = 0; i < output.length; i++) {

    //print each element (item) of the array
    console.log(output[i]);
}
});
