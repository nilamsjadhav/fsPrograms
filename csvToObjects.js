const fs = require('fs');

const readData = file => fs.readFileSync(file, 'utf8');

const writeData = content => {
  fs.writeFileSync('./pokemon.json', JSON.stringify(content), 'utf8');
};

const splitRecord = record => record.split('|');

const keys = records => splitRecord(records);

const determineValue = function (value) {
  return value.includes(',') ? value.split(',') : value;
};

const assignValue = function (fields) {
  return function (element, value, index) {
    const key = fields[index];
    const newValue = determineValue(value);
    element[key] = +newValue || newValue;
    return element;
  };
};

const createObject = function (fields) {
  return (record) => {
    return record.reduce(assignValue(fields), {});
  };
};

const convertToObject = function (records, fields) {
  return records.map(splitRecord).map(createObject(fields));
};

const structureDetails = function (file) {
  const records = readData(file).split('\n');
  return convertToObject(records.slice(1), keys(records[0]));
};

const main = function () {
  const contents = structureDetails('./pokemonDetails.csv');
  writeData(contents);
};

main();
