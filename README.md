
# Hello world

```
$ docker-compose up -d
```

```
$ curl localhost:8080
{
  "postgres":"healthy",
  "redis":"healthy"
}
```

```
$ docker-compose kill postgres redis
$ curl localhost:8080
{
  "postgres":"KO",
  "redis":"KO"
}
```
