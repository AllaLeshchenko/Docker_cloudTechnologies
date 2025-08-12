#!/bin/bash

printenv

URL="${URL:="https://jsonplaceholder.typicode.com/users"}"
OUTPUT_FILE="${OUTPUT_FILE:="/data/users.json"}"

#echo "===> ${URL}"
#echo "===> ${OUTPUT_FILE}"

curl -o "${OUTPUT_FILE}" "${URL}"
echo "Data has been saved to ${OUTPUT_FILE}"