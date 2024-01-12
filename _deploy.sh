#!/bin/bash
#clear

read -p "Qual mensagem de deploy? " mess
if [ -z $mess ]
then
 mess="deploy"
fi

# abort on errors
set -e

# increase node space allocation
export NODE_OPTIONS="--max-old-space-size=16384"

export NODE_OPTIONS=--openssl-legacy-provider


git init
git add -A
git commit -m $mess


git push -f https://<TOKEN>@github.com/<USER>/<REPO>.git master

# build
npm run build

# navigate into the build output directory
cd src/.vuepress/dist


git init
git add -A
git commit -m $mess


git push -f https://<TOKEN>@github.com/<USER>/<REPO>.git master:gh-pages
