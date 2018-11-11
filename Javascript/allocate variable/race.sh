#!/bin/sh

timeone=$( time (node Racer.js) 2>&1 )
timetwo=$( time (node Racer.js) 2>&1 )
timethree=$( time (node Racer.js) 2>&1 )

node print.js "$timeone $timetwo $timethree"