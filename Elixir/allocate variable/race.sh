#!/bin/sh

DIR="/Users/fredrik/Documents/code race/Elixir/allocate variable";

timeone=$( time ("elixir ${DIR}/Racer.exs") 2>&1 )
timetwo=$( time ("elixir ${DIR}/Racer.exs") 2>&1 )
timethree=$( time ("elixir ${DIR}/Racer.exs") 2>&1 )

node "${DIR}/print.js" "$timeone $timetwo $timethree"