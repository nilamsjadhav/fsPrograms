const {generateChart} = require('./chartGenerator.js');
const {generateStyleSheet} = require('./styleGenerator.js');
const statistics = require('./' + process.argv[2]);

generateChart('index.html', 'style.css', 'barStyle.css', statistics);
generateStyleSheet(statistics, 'barStyle.css');