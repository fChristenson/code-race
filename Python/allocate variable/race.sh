#!/bin/sh

timeone=$( time (python Racer.py) 2>&1 )
timetwo=$( time (python Racer.py) 2>&1 )
timethree=$( time (python Racer.py) 2>&1 )

node print.js "$timeone $timetwo $timethree"