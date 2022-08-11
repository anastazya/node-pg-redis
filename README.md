
#### This is intended to be a flight check for redis / postgres for specific apps

#### Feel free to take and modify as i did

```bash
docker-compose up -d
```

```bash
$ curl localhost:8080
{
  "postgres":"UP",
  "redis":"UP"
}
```

```bash
$ docker-compose kill postgres redis
$ curl localhost:8080
{
  "postgres":"DOWN",
  "redis":"DOWN"
}
```
