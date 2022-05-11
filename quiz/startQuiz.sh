#!/bin/bash

function displayResult(){
  local result=$1;
  local msg='';
  msg="Oop! Wrong answer";
  if [[ $result > 0 ]]
  then
    msg="You are right ! You won ${result}";
  fi
  echo -e "${msg}\n";
}

function start(){
  local count=0;
  local reward=0;
  local result=0;
  while [[ $count < 2 ]]
  do
    node quiz.js "q";
    read -p "Answer :" answer;
    result=`node quiz.js 'a' $answer`;
    displayResult $result;
    reward=$(( $reward + $result ));
    count=$(( $count + 1 ));
  done
  echo "Congratulations..!! You earned $reward";
}

start
