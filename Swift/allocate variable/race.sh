#!/bin/sh

timeone=$( time (swift Racer.swift) 2>&1 )
timetwo=$( time (swift Racer.swift) 2>&1 )
timethree=$( time (swift Racer.swift) 2>&1 )

node print.js "$timeone $timetwo $timethree"