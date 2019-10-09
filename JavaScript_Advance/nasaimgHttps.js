const https = require("https"); // requiring https module
const fs = require("fs");      //  requiring fs module
const Stream = require("stream").Transform;
const options = {
    hostname: "api.nasa.gov",  // nasa api 
    port: 443, // tcp port
    path: "/planetary/apod?api_key=DEMO_KEY&date=2019-08-08", // path from which image is extracted 
    method: 'GET'
};
var wholedata = "";
const request = https.request(options, function (res) {
    res.on("data", function (chunk) {
        wholedata += chunk; // we get data in chunks or packets so we are adding it to get wholedata
    });
    res.on("end", function () {
        const JSONobj = JSON.parse(wholedata); // parsing data into object form
        const path = JSONobj["url"];
        const img = https.request(path, function (res) {
            const data = new Stream(); // creating new stream
            res.on("data", function (chunk) {
                data.push(chunk);
            });
            res.on("end", function () {
                fs.writeFileSync("file.jpg", data.read())  // saving image in file.jpg file
            });
        });
        img.end();
    });
})
request.end(); // ending request
