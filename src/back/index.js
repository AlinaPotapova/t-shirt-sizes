const https = require("https");
const fs = require("fs");
const path = require("path");
const express = require("express");
const app = express();
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const options = {
    key: fs.readFileSync(path.join(__dirname, "../../../keys", "key.pem")),
    cert: fs.readFileSync(path.join(__dirname, "../../../keys", "cert.pem"))
};

app.use(express.static(path.join(__dirname, "../", "front")));
app.use(express.json());

https
    .createServer(options, app)
    .listen(4000, () => {
        console.log('server is runing at port 4000')
    });


app.get('/', (req, res) => {
    console.log(req);
    res.sendFile(path.join(__dirname, '../', "front", "index.html"));
})


app.post('/request', (req, res) => {
    var filePath = path.join(__dirname, "../../data.csv");
    const csv = createCsvWriter({
        path: filePath,
        header: [
            { id: "size", title: "T-Shirt size" },
            { id: "email", title: "E-mail" },
            { id: "address", title: "Address" },
        ],
        append: fs.existsSync(filePath)
    });
    csv.writeRecords([
        req.body,
    ]).then(() => { console.log("Done!"); });
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Success!');

})