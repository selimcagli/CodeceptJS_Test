#!/usr/bin/env bash

BASEDIR=$(dirname "$0")
echo "$BASEDIR"

echo codeceptjs@1.1.1 downloading
npm install codeceptjs@1.1.1
echo codeceptjs@1.1.1 downloaded


echo webdriverio downloading
npm install webdriverio
echo webdriverio downloaded

echo run tests
cd $BASEDIR\\node_modules\\.bin
.\\codeceptjs run --config=./../../codecept.json --steps
echo test finished

read