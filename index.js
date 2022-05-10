const inquirer = require('inquirer');
const fs = require('fs');
const CheckboxPrompt = require('inquirer/lib/prompts/checkbox');

const generateReadMe = ({projectName, description,installation,usage,credits,thirdParty,license,code,github,email}) =>
`
${code}
#${projectName}
##Description
${description}

##Table of Contents
[Installation](#installation)
[Usage](#usage)
[Credits](#credits)
[License](#license)

##Installation
${installation}

##Usage
${usage}

##Credits
${credits}
${thirdParty}
##License
This appilication is covered by the ${license} license.

##Questions
${github}
${email}

`;

 



inquirer
  .prompt([
    {
      type: 'input',
      name: 'projectName',
      message: 'What is your projects name?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a short description explaining the what, why, and how of your project.',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions and examples for use.',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions and examples for use.',
    },
    {
      type: 'input',
      name: 'credits',
      message: 'List your collaborators, if any, with links to their GitHub profiles.',
    },
    {
      type: 'input',
      name: 'thirdParty',
      message: 'If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What license did you use?',
      default: 'none',
      choices: [{key:"a" ,value:"MIT",code:"[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"},
        
      ],
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your github URL?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
  ])
  
  .then((answers) => {
    console.log(answers)
    console.log(answers.license)
    if(answers.license==="MIT"){
      answers.code="[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    }
    const readMeFileContent = generateReadMe(answers);

    fs.writeFile('README.md', readMeFileContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README file!')
    );
    
  });