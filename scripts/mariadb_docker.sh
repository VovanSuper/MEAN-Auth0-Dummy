#!/usr/bin/env bash

# docker run --name my-maria -e MYSQL_ROOT_PASSWORD=triton185722 -it -p 3306:3306 -d mariadb
docker run -it --name my-maria \
     --mount type=volume,src=data,dst=/var/lib/mysql \
     -p 3306:3306 \
     -e MYSQL_ROOT_PASSWORD=triton185722 \
     -e MYSQL_DATABASE=UsersDb \
     -e MYSQL_USER=vovansuper \
     -e MYSQL_PASSWORD=ova354 \
      mariadb