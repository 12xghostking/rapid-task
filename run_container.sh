#!/bin/bash
CONTAINER_NAME1="my-container"
CONTAINER_NAME2="my-container-back"
MY_NAME="anmolbakshi12"
FRONTEND_IMAGE="frontend"
BACKEND_IMAGE="backend"
docker stop "$CONTAINER_NAME1" >/dev/null 2>&1
docker rm "$CONTAINER_NAME1" >/dev/null 2>&1

docker stop "$CONTAINER_NAME1" >/dev/null 2>&1
docker rm "$CONTAINER_NAME1" >/dev/null 2>&1

docker run -d -p 3000:3000 --name "$CONTAINER_NAME1" "$MY_NAME"/"$FRONTEND_IMAGE"
docker run -d -p 5000:5000 --name "$CONTAINER_NAME2" "$MY_NAME"/"$BACKEND_IMAGE"
