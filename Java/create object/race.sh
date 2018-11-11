#!/bin/sh

javac Racer.java
timeone=$( time (java Racer Racer.class) 2>&1 )
timetwo=$( time (java Racer Racer.class) 2>&1 )
timethree=$( time (java Racer Racer.class) 2>&1 )

node print.js "$timeone $timetwo $timethree"