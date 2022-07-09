#!/bin/sh


# run from dir which contains t-shirt-sizes
rm -r t_shirt_sizes/src/back/node_modules
# zip project folder with all files inside (-r is recursive)
zip build t_shirt_sizes/* -r 
scp build.zip t_shirt_sizes/run.sh root@159.69.216.58:~   
rm build.zip