#! /usr/bin/env node

import { Command } from 'commander'
import { run } from './run'
const program = new Command()

program
  .name('fastgen')

program.command('run')
  .option('-f, use a file for settings instead of prompting the user')
  .action(run)

program.parse()
