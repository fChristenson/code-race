#!/bin/sh

kotlinc Racer.kt -include-runtime -d race.jar
timeone=$( time (java -jar race.jar) 2>&1 )
timetwo=$( time (java -jar race.jar) 2>&1 )
timethree=$( time (java -jar race.jar) 2>&1 )

node print.js "$timeone $timetwo $timethree"