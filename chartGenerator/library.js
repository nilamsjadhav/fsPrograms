const values = (statistics) => Object.values(statistics);

const length = statistics => Object.keys(statistics).length;

const keys = statistics => Object.keys(statistics);

const generateAttribute = function (attribute, value) {
  return attribute + '=' + '"' + value + '"';
};

const openingTag = (tag, property = '') => '<' + tag + ' ' + property + '>';

const closingTag = tag => '</' + tag + '>';

const generateTag = function (tag, content, property = '') {
  return openingTag(tag, property) + content + closingTag(tag);
};

const createProperty = function (attribute, value) {
  return attribute + ':'  + value;
};

const getDenominator = function(value){
  const length = value.toString().length;
  return +(1 + '0'.repeat(length));
};

const computePercentage = function (value, denominator) {
  return (value / denominator * 100) * 3;
};

const calculatePercentage = function (values, value) {
  const percentages = [];
  const denominator = getDenominator(value);
  for (let index = 0; index < values.length; index++) {
    percentages.push(computePercentage(values[index], denominator));
  }  
  return percentages;
};

const convertToPercentage = function (values) {
  const number = values.find(value => value > 100);
  return number ? calculatePercentage(values, number) : values;
};

exports.values = values;
exports.length = length;
exports.keys = keys;
exports.generateAttribute = generateAttribute;
exports.generateTag = generateTag;
exports.createProperty = createProperty;
exports.convertToPercentage = convertToPercentage;