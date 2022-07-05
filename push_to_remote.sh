#!/bin/sh


# run from dir which contains t-shirt-sizes
rm t-shirt-sizes/src/back/node_modules
zip t-shirt-sizes * 
scp t-shirt-sizes.zip root@159.69.216.58:~   