const fs = require('fs');
const statistics = require('./statistics.json');
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

const headTag = function (styleSheet1, styleSheet2) {
  const title = generateTag('title', 'Chart');
  const link1 = formLink(styleSheet1);
  const link2 = formLink(styleSheet2);
  return generateTag('head', title + link1+link2);
};

const bodyTag = function (statistics){
  const divInCharts = bars(length(statistics));
  const divInLabels = labels(length(statistics), 'div', keys(statistics));
  const attribute = generateAttribute('class', 'outer');
  const outerDiv = generateTag('div', divInCharts + divInLabels, attribute);
  return generateTag('body', outerDiv);
};

const formChart = function (styleSheet1, styleSheet2, statistics) {
  return generateTag('html', headTag(styleSheet1, styleSheet2) + bodyTag(statistics));
};

const generateChart = function(htmlFile, styleSheet1, styleSheet2, statistics) {
  fs.writeFileSync(htmlFile, formChart(styleSheet1, styleSheet2, statistics), 'utf8');
};

generateChart('chartStyle.html', 'style.css', 'barStyle.css', statistics);