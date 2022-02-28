#!/usr/bin/env sh

set -e

npm run build
cd dist
touch .nojekyll

git init
git add -A
git commit -m 'github pages deploy'
