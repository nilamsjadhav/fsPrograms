const fs = require('fs');
const lib = require('./library.js');
const { length, values, createProperty, convertToPercentage } = lib;

const encloseStyle = (className, property)=>className + ' { ' + property + '}';

const generateStyle = function (numbers, values) {
  let divs = '';
  let count = 0;

  for (let index = 1; index <= numbers; index++) {
    const className = '.div' + index;
    const property = createProperty('height', values[count] + 'px');
    count++;
    divs += encloseStyle(className, property) + '\n';
  }
  return divs;
};

const generateStyleSheet = function (statistics, styleSheet) {
  const valueInPercentage = convertToPercentage(values(statistics));
  const style = generateStyle(length(statistics), valueInPercentage);
  fs.writeFileSync(styleSheet, style, 'utf8');
}

exports.generateStyleSheet = generateStyleSheet;