#!/usr/bin/env sh

PLATFORM='web-mobile';
REPO_PATH=`git rev-parse --show-toplevel`;
REPO=`basename ${REPO_PATH}`;
BRANCH=`git branch | grep \* | cut -d ' ' -f2`;
BUILD="/mnt/c/users/dheck/software/CocosCreator/CocosCreator.exe --path . --build 'title=${BRANCH};platform=${PLATFORM};buildPath=./build;debug=false;webOrientation=landscape;packageName=com.${REPO}.${BRANCH}'";

echo ${BUILD};
eval ${BUILD};

cd ./build/${PLATFORM};

GIT_INIT="git init"
echo $GIT_INIT
eval $GIT_INIT
echo ''

GIT_ADD="git add -A"
echo $GIT_ADD
eval $GIT_ADD
eval ''

GIT_COMMIT="git commit -m 'deploy'"
echo $GIT_COMMIT
eval $GIT_COMMIT
echo ''

GIT_PUSH="git push -f git@github.com:dhecking/${REPO}.git master:gh-pages"
echo $GIT_PUSH
eval $GIT_PUSH
echo ''

cd -
