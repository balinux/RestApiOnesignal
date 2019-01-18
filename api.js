const express = require('express');
const bodyParser = require('body-parser');
const sender = require('./sender');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// cors
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/', (Request, Response) => {
    Response.sendFile(path.join(__dirname + '/index.html'))
});

app.post('/api/v1/usdi/createpushnotif', (Request, Response) => {

    // using async await
    // let sender = await sender({...Request.body});
    // Response.json(sender);

    sender({ ...Request.body })
        .then((data) => { Response.json(data) })
        .catch((error) => { console.log(error) })
});

app.get('/api/v1/usdi/createpushnotifwithdata', (Request, Response) => {

    const data = {
        "app_id": "5c28dcf1-cf7a-4ba6-8e8d-f5874da67738",
        "contents": { "en": "test notification" },
        "included_segments": ["All"]
    }

    sender({ ...data })
        .then((data) => { Response.json(data) })
        .catch((error) => { console.log(error) })
});


app.listen(port, () => console.log(`app listening on port ${port}`));