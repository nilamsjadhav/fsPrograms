const fs = require('fs');
const {length, keys, generateTag, generateAttribute} = require('./library.js');

const bars = function (numbers) {
  let bars = '';
  
  for (let index = 1; index <= numbers; index++) {
    const property = generateAttribute('class', 'div' + index);
    bars += generateTag('div', '', property);
  }  
  return generateTag('div', bars, generateAttribute('class', 'chart'));
};

const labels = function (number, tag, content) {
  let labels = '';
  let count = 0;
  
  for (let index = 1; index <= number; index++) {
    labels += generateTag(tag, content[count]);
    count++;
  }  
  return generateTag('div', labels, generateAttribute('class', 'names'));
};

const formLink = function (styleSheet) {
  let href = generateAttribute('href', styleSheet);
  const rel = generateAttribute('rel', 'stylesheet');
  return generateTag('link', '', rel + ' ' + href);
};

const headTag = function (styleSheet, generatedStyle) {
  const title = generateTag('title', 'Chart');
  const styleSheetLink = formLink(styleSheet);
  const generatedStyleLink = formLink(generatedStyle);
  return generateTag('head', title + styleSheetLink + generatedStyleLink);
};

const bodyTag = function (statistics){
  const chart = bars(length(statistics));
  const names = labels(length(statistics), 'div', keys(statistics));
  const attribute = generateAttribute('class', 'outer');
  const outerDiv = generateTag('div', chart + names, attribute);
  return generateTag('body', outerDiv);
};

const formChart = function (styleSheet, generatedStyle, statistics) {
  const head = headTag(styleSheet, generatedStyle);
  const body = bodyTag(statistics);
  return generateTag('html', head + body);
};

const generateChart = function (file, styleSheet, generatedStyle, statistics) {
  const chart = formChart(styleSheet, generatedStyle, statistics);
  fs.writeFileSync(file, chart, 'utf8');
};

exports.generateChart = generateChart;