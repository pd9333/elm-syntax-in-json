#!/usr/bin/env just --justfile

dev:
  parcel serve --open --port 5000 src/index.html

build:
  parcel build src/index.html

# Local Variables:
# mode: makefile
# End:
# vim: set ft=make :
