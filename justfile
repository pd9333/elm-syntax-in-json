#!/usr/bin/env just --justfile

dev:
  rm -rf dist/
  parcel serve --open --port 5000 src/index.html

# for github pages
page:
  rm index.html index.*.js
  rm -rf dist/
  parcel build --no-optimize src/index.html
  sd 'src="/(index.*js)"' 'src="/elm-syntax-in-json/$1"' dist/index.html
  sd '//# sourceMappingURL.*' '' dist/index.*.js
  git checkout page
  git reset --soft HEAD^
  mv dist/* .
  rm index.*.map
  git add index.html index.*.js
  git commit -m "docs: release page"
  git push origin page --force
  git checkout trunk

# Local Variables:
# mode: makefile
# End:
# vim: set ft=make :
