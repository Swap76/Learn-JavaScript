### what is Redis?
Redis is an open source (BSD licensed), in-memory data structure store, used as a database, cache and message broker.
It supports data structures such as strings, hashes, lists, sets, sorted sets with range queries, bitmaps, hyperloglogs, geospatial indexes with radius queries and streams.

### how to connect with redis
The first thing that we need to do is install Redis
We can either download the latest Redis tarball from redis.io, or we can use a special URL that always points to the latest stable Redis version: http://download.redis.io/redis-stable.tar.gz.

To compile Redis follow these simple steps:
```shell
    -mkdir redis && cd redis
    -curl -O http://download.redis.io/redis-stable.tar.gz
    -tar xvzf redis-stable.tar.gz
    -cd redis-stable
    -make
```
Once the compilation is done, the src directory within redis-stable is populated with different executables that are part of Redis
```
    -redis-server: runs the Redis Server itself.
    -redis-sentinel: runs Redis Sentinel, a tool for monitoring and failover.
    -redis-cli: runs a command line interface utility to interact with Redis.
    -redis-benchmark: checks Redis performance.
    -redis-check-aof and redis-check-dump: used for the rare cases when there are corrupted data files.
```
Starting Redis
The easiest way to start the Redis server is by running the redis-server command. In a fresh shell window, type:
```
    -redis-server
```
How to Check if Redis is Working
```
    -redis-cli ping
```
### Where can we get the free Redis instant
Redis Cloud
    -https://elements.heroku.com/addons/rediscloud
    -https://appharbor.com/addons/rediscloud

Redis Labs
    -https://redislabs.com/    
