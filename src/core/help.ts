import chalk from 'chalk'

/**
 * Prints utility help info
 */
async function help () {
  const info = [
    `${chalk.bold('-h, --help')}        Prints all commands and it\'s description.`,
    `                  ${chalk.bold('Synopsis')}: kirpichik --help`,
    ``,
    `${chalk.bold('-t, --template')}    Defines template of generated components.`,
    `                  ${chalk.bold('Synopsis')}: kirpichik --template=<template name> <component name>`,
    `                  ${chalk.bold('Example')}: kirpichik --template=vue ComponentA ComponentB`,
    ``,
    `${chalk.bold('-b, --branch')}      Generate component based on branch structure.`,
    `                  ${chalk.bold('Synopsis')}: kirpichik --template=<template name> --branch=<branch name>`,
    `                  ${chalk.bold('Example')}: kirpichik --template=vue --branch=pug`,
    ``,
    `${chalk.bold('-o, --options')}     Pass options to generated components.`,
    `                  All options must be passed in followed format:`,
    `                  ${chalk.italic('a,b=true,c=false,!d')}`,
    `                  ${chalk.bold('Synopsis')}: kirpichik --template=<template name> --options=<options string>`,
    `                  ${chalk.bold('Example')}: kirpichik --template=vue --options=styles,pug`,
    `${chalk.bold('-i, --info')}        Outputs information of defined template.`,
    `                  If you puts components with this command, components will not generated.`,
    `                  ${chalk.bold('Synopsis')}: kirpichik --info --template=<template name>`,
    `                  ${chalk.bold('Example')}: kirpichik --info --template=vue`
  ]

  console.info(info.join('\n'))
}

export default help
