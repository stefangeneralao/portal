#!/usr/bin/env bash
if [[ $EUID -ne 0 ]]; then
  echo "This script must be run as root" 
  exit 1
fi
yarn
yarn build
docker build -t portal .
docker stop portal || true
docker rm portal || true
docker run -p 3006:3006 -d --name portal portal