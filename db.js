
const knex = require('knex')({
    client: 'pg',
    connection: {
        host : process.env['PG_HOST'],
        user : process.env['PG_USER'],
        password : process.env['PG_PASS'],
        database : process.env['PG_DB'],
    },
});

const redis = require("redis");
const client = redis.createClient({
    host: process.env['REDIS_HOST'],
    password: process.env['REDIS_PASSWORD'],
    retry_strategy: () => 1000,
});
client.on("end", () => {
    // nothing
});
client.on("error", function (err) {
    // nothing
});

const ping_pg = () => {
    return knex.raw('SELECT 1;')
        .then(() => true)
        .catch(() => false);
};

const ping_redis = () => {
    const timeout = new Promise((resolve, reject) => {
        const id = setTimeout(() => {
            clearTimeout(id);
            resolve(false);
        }, 1000);
    });

    const query = new Promise((resolve, reject) => {
        client.keys('*', (err, data) => {
            if (!!err) resolve(false);
            else resolve(true);
        });
    });
    return Promise.race([timeout, query]);
};

module.exports = { ping_pg, ping_redis };
