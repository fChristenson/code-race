#!/bin/sh

timeone=$( time (php Racer.php) 2>&1 )
timetwo=$( time (php Racer.php) 2>&1 )
timethree=$( time (php Racer.php) 2>&1 )

node print.js "$timeone $timetwo $timethree"