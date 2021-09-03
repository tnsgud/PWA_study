const functions = require("firebase-functions");

exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send('안녕하세요!')
})
