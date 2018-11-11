#!/bin/sh

DIR="/Users/fredrik/Documents/code race/C/allocate variable";

clang -o "${DIR}/a.out" "${DIR}/Racer.c"
timeone=$( time ("${DIR}/a.out") 2>&1 )
timetwo=$( time ("${DIR}/a.out") 2>&1 )
timethree=$( time ("${DIR}/a.out") 2>&1 )

node "${DIR}/print.js" "$timeone $timetwo $timethree"