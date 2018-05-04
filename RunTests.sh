#!/usr/bin/env bash

BASEDIR=$(dirname "$0")
echo "$BASEDIR"

echo run tests
cd $BASEDIR\\node_modules\\.bin
.\\codeceptjs run --config=./../../codecept.json --steps
echo test finished

read