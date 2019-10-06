#!/usr/bin/env sh

REPO_PATH=`git rev-parse --show-toplevel`
REPO_NAME=`basename $REPO_PATH`
BRANCH=`git branch | grep \* | cut -d ' ' -f2`
COCOS_PLAT="web-mobile"
COCOS_ROOT="/mnt/c/users/dheck/software/CocosCreator"
COCOS_SOURCE="/mnt/c/users/dheck/github/dhecking/$REPO_NAME"
COCOS_CONFIG="'title=$BRANCH;platform=$COCOS_PLAT;packageName=com.$REPO_NAME.$BRANCH;buildPath=./build;debug=false;webOrientation=landscape'"
PROMPT="[deploy.sh]"

echo ''
echo "----------------------------------------------------------"
echo "COCOS_PLAT:       $COCOS_PLAT"
echo "COCOS_ROOT:       $COCOS_ROOT"
echo "COCOS_SOURCE:     $COCOS_SOURCE"
echo "COCOS_CONFIG:     $COCOS_CONFIG"
echo "----------------------------------------------------------"
echo ''

CMD="$COCOS_ROOT/CocosCreator.exe --path . --build $COCOS_CONFIG"
echo "$PROMPT $CMD"
eval $CMD
echo ''


CMD="cd ./build/$COCOS_PLAT"
echo "$PROMPT $CMD"
eval $CMD
echo ''

CMD="git init"
echo "$PROMPT $CMD"
eval $CMD
echo ''

CMD="git add -A"
echo "$PROMPT $CMD"
eval $CMD
echo ''

CMD="git commit -m 'deploy'"
echo "$PROMPT $CMD"
eval $CMD
echo ''

CMD="git push -f git@github.com:dhecking/${REPO_NAME}.git master:gh-pages"
echo "$PROMPT $CMD"
eval $CMD
echo ''
echo ''

cd -
