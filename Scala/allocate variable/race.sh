#!/bin/sh

timeone=$( time (scala Racer.scala) 2>&1 )
timetwo=$( time (scala Racer.scala) 2>&1 )
timethree=$( time (scala Racer.scala) 2>&1 )

node print.js "$timeone $timetwo $timethree"