#!/usr/bin/env just --justfile

dev:
  parcel src/index.html

build:
  parcel build src/index.html

# Local Variables:
# mode: makefile
# End:
# vim: set ft=make :
