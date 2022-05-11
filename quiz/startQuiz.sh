#!/bin/bash

count=1;
while [ $count -le 2 ]
do
  node quiz.js 'q';
  read -p 'Answer :' answer;
  node quiz.js 'a' $answer;
  count=$(( $count + 1 ));
done