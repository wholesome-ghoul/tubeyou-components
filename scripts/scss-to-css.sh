#!/bin/bash

# INTENDED TO RUN FROM PROJECT ROOT

yarn node-sass src/ -o dist/ &&
  grep -rlZ '\.scss' ./dist | xargs -0 -r sed -i 's/\.scss/\.css/g'
