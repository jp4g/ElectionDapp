#!/bin/bash
npm install
npm install -g webpack webpack-cli
truffle migrate --reset
npm run start
