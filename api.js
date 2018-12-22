const express = require('express');
const bodyParser = require('body-parser');
const sender = require('./sender');

const app = express();
const port = process.env.PORT || 3000

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api/v1/pushnotif', (Request, Response) => {
    
    // using async await
    // let sender = await sender({...Request.body});
    // Response.json(sender);

    sender({ ...Request.body })
        .then((data) => { Response.json(data) })
        .catch((error) => { console.log(error) })
});

app.listen(port, () => console.log(`app listening on port ${port}`));