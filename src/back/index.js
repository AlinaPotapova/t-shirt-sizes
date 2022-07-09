const https = require("https");
const fs = require("fs");
const path = require("path");
const express = require("express");
const app = express();
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

app.use(express.static(path.join(__dirname, "../", "front")));
app.use(express.json());

https
    .createServer(
        {
            key: fs.readFileSync(path.join(__dirname, "../../../keys", "key.pem")),
            cert: fs.readFileSync(path.join(__dirname, "../../../keys", "cert.pem"))
        },
        app)
    .listen(443, () => {
        console.log('server is runing at port 443')
    });


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../', "front", "index.html"));
})

app.post('/submit', (req, res) => {
    var filePath = path.join(__dirname, "../../data.csv");
    var fileExist = fs.existsSync(filePath);
    const csv = createCsvWriter({
        path: filePath,
        header: [
            { id: "size", title: "T-Shirt size" },
            { id: "email", title: "E-mail" },
            { id: "address", title: "Address" },
        ],
        append: fileExist
    });
    csv.writeRecords([
        req.body,
    ]);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: "success" }));
})