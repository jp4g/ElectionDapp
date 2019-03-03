#!/bin/bash

wget https://github.com/trufflesuite/ganache/releases/download/v1.3.0/ganache-1.3.0-x86_64.AppImage
mv ganache-1.3.0-x86_64.AppImage ganacheApp
chmod 777 ganacheApp
./ganacheApp
