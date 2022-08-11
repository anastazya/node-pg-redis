
const db = require('./db');

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    Promise.all([db.ping_pg(), db.ping_redis()])
        .then((health) => {
            res.send({
                postgres: !!health[0] ? "UP": "DOWN",
                redis: !!health[1] ? "UP": "DOWN",
            });
        });
});

app.listen(process.env['PORT'], () => console.log(`Example app listening`));
