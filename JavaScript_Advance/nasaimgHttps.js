var https = require("https");
var fs = require("fs");
var Stream = require("stream").Transform;
const options = {
    hostname: "api.nasa.gov",
    port: 443, // tcp port
    path: "/planetary/apod?api_key=DEMO_KEY&date=2019-08-08",
    method: 'GET'
};
var wholedata = "";
var request = https.request(options, function (res) {


    res.on("data", function (chunk) {
        wholedata += chunk;

    });


    res.on("end", function () {

        var JSONobj = JSON.parse(wholedata);

        var path = JSONobj["url"];
        var img = https.request(path, function (res) {
            var data = new Stream();

            res.on("data", function (chunk) {
                data.push(chunk);


            });

            res.on("end", function () {
                fs.writeFileSync("file.jpg", data.read())

            });

        });
        img.end();





    });



})
request.end();
