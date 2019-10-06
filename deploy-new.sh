#!/usr/bin/env sh

REPO_PATH=`git rev-parse --show-toplevel`;
REPO=`basename ${REPO_PATH}`;
BRANCH=`git branch | grep \* | cut -d ' ' -f2`;
BUILD="/mnt/c/users/dheck/software/CocosCreator/CocosCreator.exe --path . --build 'title=${BRANCH};platform=web-mobile;buildPath=./build;debug=false;webOrientation=landscape;packageName=com.${REPO}.${BRANCH}'";

eval ${BUILD};

cd ./build/web-module;

git init;
git add -A;
git commit -m 'deploy';
git push -f git@github.com:dhecking/${REPO}.git ${BRANCH}:gh-pages;

cd -
