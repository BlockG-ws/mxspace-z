#!/bin/bash

command="node out/index.js --redis_host=${REDIS_HOST} --db_host=${MONGODB_HOST} \
  --collection_name=mxspace --db_user=${MONGODB_USER} --db_password=${MONGODB_PASSWORD} \
  --redis_port=${REDIS_PORT} --redis_password=${REDIS_PASSWORD} \
  --allowed_origins=${ALLOWED_ORIGINS} \
  --jwt_secret=${JWT_SECRET} \
  --color \
  --port=${PORT} \
  "

if [ -n "$ENCRYPT_KEY" ]; then
  command+=" --encrypt_key=${ENCRYPT_KEY}"
fi

if [ "$ENCRYPT_ENABLE" = "true" ]; then
  command+=" --encrypt_enable "
fi

exec $command