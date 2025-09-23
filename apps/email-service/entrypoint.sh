#!/bin/sh
while IFS='=' read -r k v; do
  export "$k=$v"
done < .env

exec java -jar app.jar
