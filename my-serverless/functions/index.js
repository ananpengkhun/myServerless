const functions = require('firebase-functions');
const express = require('express');

const app = express()

app.use(require('./route'))

app.listen(8080,() => {
    console.log("localhost:8080");
})


// Expose Express API as a single Cloud Function:
// exports.losc4c = functions.https.onRequest(app);