#!/bin/sh

go build Racer.go
timeone=$( time (./Racer) 2>&1 )
timetwo=$( time (./Racer) 2>&1 )
timethree=$( time (./Racer) 2>&1 )

node print.js "$timeone $timetwo $timethree"