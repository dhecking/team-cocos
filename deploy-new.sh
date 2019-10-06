#!/usr/bin/env sh

BRANCH=`git branch | grep \* | cut -d ' ' -f2`
BUILD="/mnt/c/users/dheck/software/CocosCreator/CocosCreator.exe --path . --build 'title=${BRANCH};platform=web-mobile;buildPath=./build;debug=false;webOrientation=landscape;packageName=com.teamcocos.${BRANCH}'"

echo ${BUILD}
# echo $BRANCH
exit 1

git add .

git commit -m'deploy'

git push

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:dhecking/team-cocos.git star-catcher:gh-pages

cd -
