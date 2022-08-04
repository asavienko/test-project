#!/bin/bash
set -e

set -a # automatically export all variables
source ../../.env
set +a

echo "echo stop & remove old docker [$DB_SERVER] and starting new fresh instance of [$DB_SERVER]"
(docker kill $DB_SERVER || :) && \
  (docker rm $DB_SERVER || :) && \
  docker run --name $DB_SERVER -e POSTGRES_PASSWORD=$POSTGRES_PASSWORD \
  -e PGPASSWORD=$POSTGRES_PASSWORD \
  -p 5432:5432 \
  -d postgres

# wait for pg to start
echo "sleep wait for pg-server [$DB_SERVER] to start";
SLEEP 3;

# create the db
echo "CREATE DATABASE $POSTGRES_DATABASE ENCODING 'UTF-8';" | docker exec -i $DB_SERVER psql -U postgres
echo "\l" | docker exec -i $DB_SERVER psql -U postgres