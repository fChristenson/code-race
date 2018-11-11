#!/bin/sh

timeone=$( time (ruby Racer.rb) 2>&1 )
timetwo=$( time (ruby Racer.rb) 2>&1 )
timethree=$( time (ruby Racer.rb) 2>&1 )

node print.js "$timeone $timetwo $timethree"