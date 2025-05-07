#!/bin/sh
docker build -t http-echo-service . && docker run --rm -it -p 8080:80 http-echo-service
