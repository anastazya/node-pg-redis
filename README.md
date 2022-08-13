
#### This is intended to be a flight check for redis / postgres for specific apps

#### Feel free to take and modify as i did

```bash
docker-compose up -d
```

```bash
$ curl localhost:8080
```

```json
{
  "postgres":"UP",
  "redis":"UP"
}
```

```bash
$ docker-compose kill postgres redis

$ curl localhost:8080
```

```json
{
  "postgres":"DOWN",
  "redis":"DOWN"
}
```

#### Testing image

docker run -ti -e REDIS_HOST='redis' \
-e REDIS_PASSWORD='radispass' \
-e PG_HOST='postgres' \
-e PG_USER='foobar' \
-e PG_PASS='foobar' \
-e PG_DB='foobar' \
-e PORT=8080 \
-p 8080:8080 \
--name witness tomthecat/witness:v0.1
