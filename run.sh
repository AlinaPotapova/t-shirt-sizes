#!/bin/sh

unzip build.zip
rm build.zip

# ensure key + cert are on the machine
# run from repo root folder
cd t-shirt-sizes/src/back
npm install
node index.js