#!/usr/bin/env bash

for step in 'images' 'scripts' 'styles' 'hash'
do
  npm run build:$step
done