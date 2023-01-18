const request = require('request');
const fs = require('fs');
const input = process.argv.slice(2);

request(input[0], (error, response, body) => {
  if (error) {
  console.log('error:', error);
  }
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  fs.writeFile(input[1], body, err => {
    if (err) {
      console.error(err);
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${input[1]}`)
  });
  
});



// fs.writeFile(input[1], content, err => {
//   if (err) {
//     console.error(err);
//   }
//   // file written successfully
// });
