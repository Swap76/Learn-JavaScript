var https = require("https"); // requiring https module
var fs = require("fs");      //  requiring fs module
var Stream = require("stream").Transform;
const options = {
    hostname: "api.nasa.gov",  // nasa api 
    port: 443, // tcp port
    path: "/planetary/apod?api_key=DEMO_KEY&date=2019-08-08", // path from which image is extracted 
    method: 'GET'
};
var wholedata = "";
var request = https.request(options, function (res) {
    res.on("data", function (chunk) {
        wholedata += chunk; // we get data in chunks or packets so we are adding it to get wholedata

    });
    res.on("end", function () {

        var JSONobj = JSON.parse(wholedata); // parsing data into object form

        var path = JSONobj["url"];
        var img = https.request(path, function (res) {
            var data = new Stream(); // creating new stream

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
