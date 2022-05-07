const fs = require('fs');

const readData = file => fs.readFileSync(file, 'utf8');

const writeData = content => fs.writeFileSync('./index.md', content, 'utf8');

const tableHeader = record => [row(record), separator(record)];

const giveLength = record => record.split('|').length;

const separator = (record) => '|--'.repeat(giveLength(record)) + '|\n';

const row = record => '|' + record + '|\n';

const table = (records) => records.slice(1).map(row);

const structureDetails = function (file) {
  const records = readData(file).split('\n');
  const list = table(records)
  list.unshift(...tableHeader(records[0]));
  writeData(list.join(''));
};

console.log(structureDetails(process.argv().slice(2)));
