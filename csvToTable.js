const fs = require('fs');

const readData = file => fs.readFileSync(file, 'utf8');

const writeData = content => fs.writeFileSync('./index.md', content, 'utf8');

const separator = record => record.map(()=>'--');

const splitEachElement = records => records.map(x => x.split('|'));

const formRow = records => records.map(record => record.join('|'));

const insertHeader = records => {
  const splittedRecords = splitEachElement(records);
  splittedRecords.splice(1, 0, separator(splittedRecords[0]));
  return splittedRecords;
};

const structureDetails = function (file) {
  const records = readData(file).split('\n');
  const table = insertHeader(records);
  writeData(formRow(table).join('\n'));
};

const main = function(){
  const file = process.argv.slice(2).join();
  structureDetails(file);
};

main();
