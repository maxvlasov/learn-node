const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const moment = require('moment')

const argv = yargs(hideBin(process.argv))
  .argv

if (argv._.find(i => i === 'current')) {
  if (argv.year || argv.y) console.log(moment().year())
  else if (argv.month || argv.m) console.log(moment().month() + 1)
  else if (argv.date  || argv.d) console.log(moment().date())
  else console.log(moment().toISOString());
}
else if (argv._.find( i=> i === 'add')) {
  if (argv.date) console.log(moment().add(argv.date, 'days'))
  else if (argv.d) console.log(moment().add(argv.d, 'days'))
  else if (argv.month) console.log(moment().add(argv.month, 'months'))
  else if (argv.m) console.log(moment().add(argv.m, 'months'))
}
else if (argv._.find( i=> i === 'sub')) {
  if (argv.date) console.log(moment().subtract(argv.date, 'days'))
  else if (argv.d) console.log(moment().subtract(argv.d, 'days'))
  else if (argv.month) console.log(moment().subtract(argv.month, 'months'))
  else if (argv.m) console.log(moment().subtract(argv.m, 'months'))
}