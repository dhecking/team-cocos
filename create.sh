#!/usr/bin/env sh

if [ $# -ne 1 ]
then
  echo "USAGE: create [project-branch]"
  echo "       ./create.sh example-3d-master"
  return
fi

# exit when any command fails
set -e

git checkout --orphan $1
rm -rf assets build library local temp packages settings README.md
echo "# $1" > README.md
git add README.md
git commit -a -m "Initial Branch (create.sh)"
git push origin $1