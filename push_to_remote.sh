#!/bin/sh


# run from dir which contains t-shirt-sizes
rm t-shirt-sizes/src/back/node_modules
# zip project folder with all files inside (-r is recursive)
zip build t-shirt-sizes/* -r 
scp build.zip t-shirt-sizes/unzip.sh root@159.69.216.58:~   