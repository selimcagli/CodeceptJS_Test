#!/usr/bin/env bash

echo selenium-standalone@latest downloading
npm install selenium-standalone@latest
echo selenium-standalone@latest downloaded

echo selenium-standalone setup started
selenium-standalone install
echo selenium-standalone setup finished

echo selenium-standalone starting
selenium-standalone start
echo selenium-standalone started

read