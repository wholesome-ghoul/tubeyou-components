#!/bin/bash

# INTENDED TO RUN FROM PROJECT ROOT

yarn tsc --build --verbose &&
  ./scripts/scss-to-css.sh
