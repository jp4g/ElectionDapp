#!/bin/bash

#install NVM
apt-get update
apt-get install build-essential libssl-dev
curl https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
source ~/.profile

#install node version [v10.15.2]
nvm install 10.15.2
