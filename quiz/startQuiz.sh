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
  local winnedPrize=0;
  local result=0;
  while [[ $count < 2 ]]
  do
    node quiz.js "q";
    read -p "Answer :" answer;
    result=`node quiz.js 'a' $answer`;
    displayResult $result;
    winnedPrize=$(( $winnedPrize + $result ));
    count=$(( $count + 1 ));
  done
  echo "Congratulations..!! You earned $winnedPrize";
}

start
