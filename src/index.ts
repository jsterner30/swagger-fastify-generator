import { Command } from 'commander'
const program = new Command()
import { run } from './run'

program
    .name('fastgen')

program.command('')
    .option('-f, use file')
    .action(run)

program.parse()
