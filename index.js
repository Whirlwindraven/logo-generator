const inquirer = require('inquirer');
const fs = require('fs');
const { createSVG } = require('./generateSvg');

async function main() {
  const questions = [
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters:',
      validate: (input) => input.length <= 3 || 'Text must be up to three characters.',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color (keyword or hexadecimal number):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color (keyword or hexadecimal number):',
    },
  ];

  const answers = await inquirer.prompt(questions);
  const svg = createSVG(answers);
  fs.writeFileSync('logo.svg', svg);

  console.log('Generated logo.svg');
}

main();
