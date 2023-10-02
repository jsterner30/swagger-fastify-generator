import { Command } from 'commander'
const program = new Command()
import { run } from './run'

program
    .name('fastgen')

program.command('run')
    .option('-f, use a file for settings instead of prompting the user')
    .action(run)

program.parse()
