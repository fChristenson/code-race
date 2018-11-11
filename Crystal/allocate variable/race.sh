#!/bin/sh

DIR="/Users/fredrik/Documents/code race/Crystal/allocate variable";

crystal build -o "${DIR}/Racer" "${DIR}/Racer.cr"
timeone=$( time ("${DIR}/Racer") 2>&1 )
timetwo=$( time ("${DIR}/Racer") 2>&1 )
timethree=$( time ("${DIR}/Racer") 2>&1 )

node "${DIR}/print.js" "$timeone $timetwo $timethree"
