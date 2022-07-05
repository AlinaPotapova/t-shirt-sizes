const https = require("https");
const fs = require("fs");
const path = require("path");
const express = require("express");
const app = express();

const options = {
    key: fs.readFileSync(path.join(__dirname, "keys", "key.pem")),
    cert: fs.readFileSync(path.join(__dirname, "keys", "cert.pem"))
};

app.use(express.static(path.join(__dirname, "../", "front")));

https
    .createServer(options, app)
    .listen(4000, () => {
        console.log('server is runing at port 4000')
    });


app.get('/', (req, res) => {
    console.log(req);
    res.sendFile(path.join(__dirname, '../', "front", "index.html"));
})

app.post('/action-page', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });


    app.post('/form_post', (req, res) => {
        const data = req.body;
    })

    fs.writeFile("data.csv", data, "utf-8", (err) => {
        if (err) console.log(err);
        else console.log("Data saved");
    });
    res.redirect(200, 'thank-you');

})