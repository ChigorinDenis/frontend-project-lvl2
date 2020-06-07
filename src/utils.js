import commander from 'commander';

export default () => {
  const program = new commander.Command();
  program
    .version('0.1.0')
    .description('Compares two configuration files and shows a difference.')
    .option('-f, --format [type]', 'output format')
    .arguments('<filepath1> <filepath2>');
  program.parse(process.argv);
};