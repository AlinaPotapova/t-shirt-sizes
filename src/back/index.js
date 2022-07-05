const https = require("http");
const fs = require("fs");
const path = require("path");


const express = require("express");
const { runInNewContext } = require("vm");


const app = express();

https
    .createServer(app)
    .listen(4000, () => {
        console.log('server is runing at port 4000')
    });
app.get('/', (req, res) => {
    console.log(req);
    res.sendFile(path.join(__dirname, "project.html"));
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
    res.redirect(303, 'thank-you');

})