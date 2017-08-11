#!/usr/bin/env bash

# Best Practice Conventions

set -e
set -u
set -x

# Dem Magic Vars
__dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
__root="$(cd "../$(dirname "${__dir}")" && pwd)"

echo ""${time}"\t\tExecuting in "${__dir}"" >> shudate.log
echo ""${time}"\t\tRoot Directory: "${__root}"" >> shudate.log

case "${1:-}" in
  major)
    eval "node version ${1}"
    ;;
  minor)
    eval "node version ${1}"
    ;;
  patch)
    eval "node version ${1}"
    ;;
  premajor)
    eval "node version ${1}"
    ;;
  preminor)
    eval "node version ${1}"
    ;;
  prepatch)
    eval "node version ${1}"
    ;;
  prerelease)
    eval "node version ${1}"
    ;;
  *)
    echo "${1} is not a valid argument."

esac
