import { Command } from 'commander'
import { run } from './run'
const program = new Command()

program
  .name('fastgen')

program.command('j')
  .option('-f, use file')
  .action(run)

program.parse()
